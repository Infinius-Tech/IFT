import Image from "next/image";
import { Globe2, PackageCheck, Award, ShieldCheck } from "lucide-react";

export default function Export() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">
            Export Peanut Butter Worldwide
          </h1>
          <p className="text-green-600 max-w-2xl mx-auto">
            Bringing the richness of Indian peanuts to global markets with
            premium quality, trusted certifications, and custom export solutions.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/privateLabel/export peanut butter.webp"
            alt="Export Peanut Butter"
            width={500}
            height={350}
            className="rounded-xl shadow-md border"
          />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center text-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Award className="h-10 w-10 text-green-700 mb-3" />
            <h3 className="font-semibold text-lg">Premium Ingredients</h3>
            <p className="text-sm text-green-600">
              Sourced from the best farms for unmatched quality.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <PackageCheck className="h-10 w-10 text-green-700 mb-3" />
            <h3 className="font-semibold text-lg">Custom Packaging</h3>
            <p className="text-sm text-green-600">
              Tailor-made jars, pouches & labels for your brand.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Globe2 className="h-10 w-10 text-green-700 mb-3" />
            <h3 className="font-semibold text-lg">Global Export</h3>
            <p className="text-sm text-green-600">
              Exported to 20+ countries with hassle-free logistics.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <ShieldCheck className="h-10 w-10 text-green-700 mb-3" />
            <h3 className="font-semibold text-lg">Certified Quality</h3>
            <p className="text-sm text-green-600">
              FSSAI, ISO, Halal, HACCP & more for trust worldwide.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-green-100 p-8 rounded-2xl text-center mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Why Choose Indian FoodTech?
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            With years of expertise in peanut butter production and exports, we
            ensure consistency, superior taste, and global compliance for every
            partner brand.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-700 to-green-900 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform"
          >
            Contact Us for Export
          </a>
        </div>
      </div>
    </section>
  );
}
