// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function About({ isHomePage }) {
//   const router = useRouter();

//   // ✅ Image list for scrolling
//   const images = [
//     "/images/aboutUs/factory_image.png",
//     // "/images/aboutUs/all.png",
//     // "/images/aboutUs/kitchen.png",
//     // "/images/aboutUs/out_story.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ✅ Auto change every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section id="about" className="py-16 bg-amber-50">
//       <div className="container mx-auto px-4 max-w-6xl">
//         {/* Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8B4513] mb-12 f">
//           About Us
//         </h2>

//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           {/* 🔄 Auto-scrolling image container */}
//           <div className="lg:w-1/2 shadow-lg border-2 rounded-2xl overflow-hidden relative h-[400px] w-full">
//             <Image
//               src={images[currentIndex]}
//               alt={`About image ${currentIndex + 1}`}
//               fill
//               className="object-cover transition-opacity duration-700"
//             />
//           </div>

//           {/* ✅ Text content */}
//           <div className="lg:w-1/2 text-black flex flex-col justify-center">
//             <h2>Premium Quality Peanut Butter & Nut Butters</h2>
//             <p>Indian Foodtech specializes in producing private label peanut butter, nut butters, and spreads tailored for global brands.</p>

//             <h2>Customized Peanut Butter Recipes</h2>
//             <p>Choose from creamy, crunchy, natural, and flavored recipes with flexible packaging options — jars, sachets, and bulk formats.</p>

//             <h2>Contract Manufacturing & Bulk Supply</h2>
//             <p>We provide OEM and white-label peanut butter solutions with export-ready compliance, FSSAI certification, and APEDA alignment.</p>

//             {isHomePage && (
//               <div>
//                 <h2>Why Choose Indian Foodtech?</h2>
//                 <ul>
//                   <li>Trusted private label partner for startups, retailers & global brands</li>
//                   <li>Bulk peanut butter supply with consistent quality</li>
//                   <li>World-class processing & branding support</li>
//                   <li>Safe, healthy, and export-ready products</li>
//                 </ul>
//               </div>
//             )}


//             {isHomePage && (
//               <button
//                 onClick={() => router.push("/aboutUs")}
//                 className="bg-[#8B4513] hover:bg-[#6B8E23] text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg mt-4"
//               >
//                 Learn More
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Keep your existing WHY CHOOSE section */}
//         {!isHomePage && (
//           <div className="mt-16">
//             <h3 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8 text-center">
//               Why Choose Indian Foodtech?
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//               <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
//                 <p className="text-gray-700 text-base font-medium">
//                   100% focus on End-to-End Private Label & Contract Manufacturing
//                 </p>
//               </div>
//               <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
//                 <p className="text-gray-700 text-base font-medium">
//                   Strong supply chain to ensure timely delivery worldwide
//                 </p>
//               </div>
//               <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
//                 <p className="text-gray-700 text-base font-medium">
//                   Flexible pack sizes, flavors, and packaging options
//                 </p>
//               </div>
//               <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
//                 <p className="text-gray-700 text-base font-medium">
//                   Export-oriented production unit with strict quality checks
//                 </p>
//               </div>
//               <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23] md:col-span-2">
//                 <p className="text-gray-700 text-base font-medium">
//                   Specializing in Peanut Butter, Almond Butter, Cashew Butter, Tahini,
//                   and a wide range of premium nut-based spreads, we bring expertise in
//                   crafting nutritious, flavorful, and high-quality products tailored
//                   for global markets and private labels.
//                 </p>
//               </div>
//             </div>

//             <p className="text-gray-700 mb-5 text-base leading-relaxed">
//               We don&#39;t sell under our own brand – your brand is our priority. Our
//               mission is simple: to empower businesses with high-quality, affordable,
//               and customized food products that help them stand out in competitive
//               markets.
//             </p>

//             <p className="text-gray-700 text-base leading-relaxed font-medium italic border-t-2 border-amber-200 pt-6">
//               If you are looking for a reliable private label food manufacturer in
//               India, Indian Foodtech is your perfect partner.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react"; // you can use ArrowRight or any icon

export default function About({ isHomePage }) {
  const router = useRouter();

  // ✅ Image list
  const images = [
    "/images/aboutUs/factory_image.png",
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

  // ✅ Next/Prev handler
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    // <section id="about" className="py-16 bg-amber-50">
    <section id="about" className="py-6 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8B4513] mb-12">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* 🔄 Image carousel only on Home page */}
          <div className="lg:w-1/2 shadow-lg border-2 rounded-2xl overflow-hidden relative h-[400px] w-full">
            <Image
              src={images[currentIndex]}
              alt={`About image ${currentIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-700"
            />
          </div>

          {/* ✅ Text Content */}
          <div className={`lg:w-1/2 text-black flex flex-col justify-center`}>
            <h2 className="mb-1 text-xl font-bold">Premium Quality Peanut Butter & Nut Butters</h2>
            <p>
              Indian Foodtech specializes in producing private label peanut butter,
              nut butters, and spreads tailored for global brands.
            </p>

            <h2 className={`${isHomePage ? 'mt-2' : 'mt-8'} mb-1 text-xl font-bold`}>Customized Peanut Butter Recipes</h2>
            <p>
              Choose from creamy, crunchy, natural, and flavored recipes with
              flexible packaging options — jars, sachets, and bulk formats.
            </p>

            <h2 className={`${isHomePage ? 'mt-2' : 'mt-8'} mb-1 text-xl font-bold`}>Contract Manufacturing & Bulk Supply</h2>
            <p>
              We provide OEM and white-label peanut butter solutions with
              export-ready compliance, FSSAI certification, and APEDA alignment.
            </p>

            {isHomePage && (
              <>
                <h2 className="text-xl font-bold mt-2 mb-1">Why Choose Indian Foodtech?</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Trusted private label partner for startups, retailers & global brands</li>
                  <li>Bulk peanut butter supply with consistent quality</li>
                  <li>World-class processing & branding support</li>
                  <li>Safe, healthy, and export-ready products</li>
                </ul>

                <button
                  onClick={() => router.push("/aboutUs")}
                  className="bg-[#8B4513] hover:bg-[#6B8E23] text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg mt-4"
                >
                  Learn More
                </button>
              </>
            )}
          </div>
        </div>

        {/* Different design for About Page */}
        {!isHomePage && (
          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8 text-center">
              Why Choose Indian Foodtech?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 font-medium">
                  100% focus on End-to-End Private Label & Contract Manufacturing
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 font-medium">
                  Strong supply chain to ensure timely delivery worldwide
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 font-medium">
                  Flexible pack sizes, flavors, and packaging options
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
                <p className="text-gray-700 font-medium">
                  Export-oriented production unit with strict quality checks
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#6B8E23] md:col-span-2">
                <p className="text-gray-700 font-medium">
                  Specializing in Peanut Butter, Almond Butter, Cashew Butter,
                  Tahini, and a wide range of premium nut-based spreads...
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-5 text-base leading-relaxed">
              We don&#39;t sell under our own brand – your brand is our priority.
              Our mission is simple: to empower businesses with high-quality,
              affordable, and customized food products.
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
