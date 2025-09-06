"use client";

import { useRouter } from "next/navigation";
import { AllProductsList } from "@/Utils/ProductList";
import Image from "next/image";

export default function Products({ header }) {
  const router = useRouter();

const products = AllProductsList.flatMap(p => p.products).filter(p => p.recommended);
  const openProductDetails = (product) => {
    router.push(`/products/${product.id}`); // change URL
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">
          {header}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="h-48 bg-amber-200 flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  src={product.cardImage}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <button
                  onClick={() => openProductDetails(product)}
                  className="text-[#6B8E23] hover:text-[#8B4513] font-semibold transition duration-300"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => router.push("/products")}
            className="text-[#6B8E23] hover:text-[#8B4513] font-semibold transition duration-300 bg-amber-100 px-6 py-3 rounded-lg shadow-md hover:shadow-lg flex items-center"
          >
            View All →
          </button>
        </div>

      </div>
    </section>
  );
}
