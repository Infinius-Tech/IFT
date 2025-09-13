import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    // Enhanced logging
    let body;
    try {
        body = await req.json();
    } catch (err) {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    let emailContent;

    if (body.formType === 'contactUS') {
        const { name, businessName, email, mobile, message } = body;
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        emailContent = `
            📩 New Contact Request

            Name: ${name}
            Business Name: ${businessName || "-"}
            Email: ${email}
            Mobile: ${mobile || "-"}

            Message:
            ${message}
        `;

    } else if (body.formType === 'sampleRequest') {
        const {
            name,
            businessName,
            email,
            mobile,
            website,
            address,
            message,
            selectedProducts
        } = body;

        if (!selectedProducts || !Array.isArray(selectedProducts) || selectedProducts.length === 0) {
            return NextResponse.json(
                { error: "Please select at least one product." },
                { status: 400 }
            );
        }
        const productsList = selectedProducts.map(product => `- ${product}`).join('\n');

        emailContent = `
            📦 New Sample Request

            Name: ${name}
            Business Name: ${businessName}
            Email: ${email}
            Mobile: ${mobile}
            Website: ${website || "-"}
            Address: ${address}

            Selected Products:
            ${productsList}

            Additional Information:
            ${message || ""}
        `;
    }


    try {
        // Check if email password is configured
        if (!process.env.EMAIL_PASSWORD) {
            console.error("EMAIL_PASSWORD environment variable is not set");
            return NextResponse.json(
                { error: "Email configuration missing" },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.SEND_EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SEND_EMAIL, // Replace with sender email
            to: "khushal@indianfoodtech.in", // Replace with recipient email
            replyTo: body.email,
            subject: body.formType === 'contactUS' ?  `Contact Request from ${body.name}` : `Sample Request from ${body.businessName}`,
            text: emailContent,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: "Sample request submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);

        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
            
        );
    }
}