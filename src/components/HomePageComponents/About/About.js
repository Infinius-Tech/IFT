"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function About({ isHomePage }) {
  const router = useRouter();

  // ✅ Image list for scrolling
  const images = [
    "/images/aboutUs/factory_image.png",
    "/images/aboutUs/all.png",
    "/images/aboutUs/kitchen.png",
    "/images/aboutUs/out_story.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto change every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8B4513] mb-12 font-serif">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* 🔄 Auto-scrolling image container */}
          <div className="lg:w-1/2 shadow-lg border-2 rounded-2xl overflow-hidden relative h-[400px]">
            <Image
              src={images[currentIndex]}
              alt={`About image ${currentIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-700"
            />
          </div>

          {/* ✅ Text content */}
          <div className="lg:w-1/2 text-black flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#6B8E23] mb-6 font-serif">
              Our Story
            </h3>
            <p>
              Welcome to <strong>Indian Foodtech</strong>, a trusted name in{" "}
              <strong>private label food manufacturing</strong> from India. We
              specialize in producing <strong>premium-quality peanut butter</strong>,{" "}
              <strong>nut butters</strong>, and <strong>premium nut-based spreads</strong>{" "}
              exclusively for <strong>private labels</strong> and international
              brands. As a leading <strong>peanut butter manufacturer in India</strong>,
              we focus on taste, nutrition, and consistency for{" "}
              <strong>retail-ready</strong> and <strong>bulk</strong> formats. With
              years of expertise in <strong>peanut butter production</strong> and
              exports, we help startups, retailers, and distributors worldwide build
              successful food brands. Our solutions cover{" "}
              <strong>customized recipes</strong> (creamy, crunchy, natural, flavored),{" "}
              <strong>packaging</strong> and <strong>labeling</strong> (jars, sachets,
              pails), and <strong>branding support</strong> — tailored to your market
              needs. Choose Indian Foodtech for{" "}
              <strong>private label peanut butter</strong>,{" "}
              <strong>contract manufacturing</strong>, and{" "}
              <strong>bulk peanut butter supply</strong> that scale with your business.
              At Indian Foodtech, we combine India’s agricultural strength with
              world-class processing technology. Our facility is{" "}
              <strong>FSSAI</strong> certified, aligned with <strong>APEDA</strong>, and
              adheres to international <strong>export compliances</strong> — ensuring
              every product is safe, healthy, and <strong>export-ready</strong>. Whether
              you need <strong>OEM manufacturing</strong>,{" "}
              <strong>white-label peanut butter</strong>, or custom{" "}
              <strong>nut butter</strong> variants, Indian Foodtech is your reliable
              partner for consistent quality and on-time delivery.
            </p>

            {isHomePage && (
              <button
                onClick={() => router.push("/aboutUs")}
                className="bg-[#8B4513] hover:bg-[#6B8E23] text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg mt-4"
              >
                Learn More
              </button>
            )}
          </div>
        </div>

        {/* Keep your existing WHY CHOOSE section */}
        {!isHomePage && (
          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8 text-center font-serif">
              Why Choose Indian Foodtech?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 text-base font-medium">
                  100% focus on End-to-End Private Label & Contract Manufacturing
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 text-base font-medium">
                  Strong supply chain to ensure timely delivery worldwide
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 text-base font-medium">
                  Flexible pack sizes, flavors, and packaging options
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 text-base font-medium">
                  Export-oriented production unit with strict quality checks
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23] md:col-span-2">
                <p className="text-gray-700 text-base font-medium">
                  Specializing in Peanut Butter, Almond Butter, Cashew Butter, Tahini,
                  and a wide range of premium nut-based spreads, we bring expertise in
                  crafting nutritious, flavorful, and high-quality products tailored
                  for global markets and private labels.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-5 text-base leading-relaxed">
              We don&#39;t sell under our own brand – your brand is our priority. Our
              mission is simple: to empower businesses with high-quality, affordable,
              and customized food products that help them stand out in competitive
              markets.
            </p>

            <p className="text-gray-700 text-base leading-relaxed font-medium italic border-t-2 border-amber-200 pt-6">
              If you are looking for a reliable private label food manufacturer in
              India, Indian Foodtech is your perfect partner.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
