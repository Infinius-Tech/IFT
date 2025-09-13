"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Products from "@/components/HomePageComponents/Product/Products";
import { AllProductsList as products } from "@/Utils/ProductList";
import PackagingTable from "./ContainerDetailsTableComponent";
import Image from "next/image";
import SampleRequestForm from "@/components/HomePageComponents/SampleRequestForm/SampleRequestForm";

export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const { products_id } = params;

  useEffect(() => {
    if (products_id) {
      const found = products.flatMap((p) => p.products).find((p) => p.id === products_id);
      setSelectedProduct(found || null);
    } else {
      setSelectedProduct(null);
    }
  }, [products_id]);
  
  const openSampleRequestModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!selectedProduct) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section (Image + Extras) */}
          <div className="relative">
             <Image
                     src={selectedProduct.otherImages && selectedProduct.otherImages.length > 0 ? selectedProduct.otherImages[0] : selectedProduct.cardImage}
                      alt={selectedProduct.name}
                      width={600}
                      height={600}
                      className="rounded"
                    />
            {/* <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            /> */}
            <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              {selectedProduct.name}
            </div>
          </div>

          {/* Right Section (Details) */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#8B4513] mb-4">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-700 mb-6">{selectedProduct.detailedDescription}</p>

              <h4 className="text-lg font-semibold text-[#6B8E23] mb-2">Ingredients</h4>
              <p className="text-gray-700 mb-4">{selectedProduct.ingredients}</p>

              <h4 className="text-lg font-semibold text-[#6B8E23] mb-2">Nutrition</h4>
              <p className="text-gray-700 mb-4">{selectedProduct.nutrition}</p>

              <h4 className="text-lg font-semibold text-[#6B8E23] mb-2">Available Sizes</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {selectedProduct.sizes.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-[#6B8E23] mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProduct.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full shadow-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={openSampleRequestModal}
                className="bg-[#8B4513] hover:bg-[#6B8E23] text-white font-bold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
              >
                Request Sample
              </button>
              <Link
                href="/contact"
                className="border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white font-bold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    <div>
      <PackagingTable />
    </div>
     <div className="pt-12">
      <Products header={'Recomended Product'}/>
    </div>
    
    {/* Sample Request Form Modal */}
    {isModalOpen && (
      <SampleRequestForm closeModal={closeModal} />
    )}
    </div>
  );
}

