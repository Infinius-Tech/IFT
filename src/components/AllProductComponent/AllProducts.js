// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { X, CheckCircle, Package, Scale, Leaf, Heart } from "lucide-react";
// import { AllProductsList } from "@/Utils/ProductList";

// export default function AllProducts() {
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const productId = searchParams.get("id");

//     useEffect(() => {
//         if (productId) {
//             // Flatten all products to find the selected one
//             const allProducts = AllProductsList.flatMap(category => category.products);
//             const found = allProducts.find((p) => p.id === productId);
//             setSelectedProduct(found || null);
//             setIsModalOpen(true);
//         } else {
//             setSelectedProduct(null);
//             setIsModalOpen(false);
//         }
//     }, [productId]);

//     const openProductDetails = (product) => {
//         router.push(`/products/${product.id}`)
//     }
    
//     return (
//         <section className="py-16 bg-white">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">
//                     Our Products
//                 </h2>

//                 {/* Categories */}
//                 {AllProductsList.map((category) => (
//                     <div key={category.id} className="mb-16">
//                         <h3 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-8 pb-2 border-b-2 border-amber-200">
//                             {category.categoryName}
//                         </h3>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {category.products.map((product) => (
//                                 <div
//                                     key={product.id}
//                                     className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full"
//                                 >
//                                     <div className="h-48 bg-amber-200 flex items-center justify-center overflow-hidden">
//                                         <img
//                                             src={product.image}
//                                             alt={product.name}
//                                             className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//                                         />
//                                     </div>
//                                     <div className="p-6 flex flex-col flex-grow">
//                                         <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
//                                             {product.name}
//                                         </h3>
//                                         <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
//                                         <button
//                                             onClick={() => openProductDetails(product)}
//                                             className="mt-auto text-[#6B8E23] hover:text-[#8B4513] font-semibold transition duration-300 flex items-center"
//                                         >
//                                             View Details →
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}

//                 {/* Product Detail Modal */}
//                 {isModalOpen && selectedProduct && (
//                     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//                         <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                             <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
//                                 <h3 className="text-2xl font-bold text-[#8B4513]">{selectedProduct.name}</h3>
//                                 <button 
//                                     onClick={closeProductDetails}
//                                     className="text-gray-500 hover:text-gray-700"
//                                 >
//                                     <X size={24} />
//                                 </button>
//                             </div>
                            
//                             <div className="p-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                     <div>
//                                         <div className="h-64 bg-amber-100 rounded-lg overflow-hidden mb-4">
//                                             <img
//                                                 src={selectedProduct.image}
//                                                 alt={selectedProduct.name}
//                                                 className="h-full w-full object-cover"
//                                             />
//                                         </div>
                                        
//                                         <div className="mb-6">
//                                             <h4 className="text-lg font-semibold text-[#8B4513] mb-2 flex items-center">
//                                                 <Package className="mr-2" size={20} />
//                                                 Available Sizes
//                                             </h4>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {selectedProduct.sizes.map((size, index) => (
//                                                     <span 
//                                                         key={index}
//                                                         className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
//                                                     >
//                                                         {size}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     <div>
//                                         <div className="mb-6">
//                                             <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Description</h4>
//                                             <p className="text-gray-700">{selectedProduct.detailedDescription}</p>
//                                         </div>
                                        
//                                         <div className="mb-6">
//                                             <h4 className="text-lg font-semibold text-[#8B4513] mb-2 flex items-center">
//                                                 <Scale className="mr-2" size={20} />
//                                                 Ingredients
//                                             </h4>
//                                             <p className="text-gray-700">{selectedProduct.ingredients}</p>
//                                         </div>
                                        
//                                         <div className="mb-6">
//                                             <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Nutrition Information</h4>
//                                             <p className="text-gray-700">{selectedProduct.nutrition}</p>
//                                         </div>
                                        
//                                         <div className="mb-6">
//                                             <h4 className="text-lg font-semibold text-[#8B4513] mb-2 flex items-center">
//                                                 <CheckCircle className="mr-2" size={20} />
//                                                 Certifications
//                                             </h4>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {selectedProduct.certifications.map((cert, index) => (
//                                                     <span 
//                                                         key={index}
//                                                         className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
//                                                     >
//                                                         {cert.includes('Organic') && <Leaf className="mr-1" size={14} />}
//                                                         {cert.includes('Vegan') && <Heart className="mr-1" size={14} />}
//                                                         {cert}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div className="mt-8 flex justify-center">
//                                     <button 
//                                         onClick={closeProductDetails}
//                                         className="bg-[#8B4513] hover:bg-[#6B8E23] text-white font-semibold py-3 px-8 rounded-xl transition duration-300"
//                                     >
//                                         Close
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { X, CheckCircle, Package, Scale, Leaf, Heart } from "lucide-react";
import { AllProductsList } from "@/Utils/ProductList";

export default function AllProducts() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("id");
    
    // Refs for category sections
    const peanutButterRef = useRef(null);
    const nutButterRef = useRef(null);
    const roastedPeanutRef = useRef(null);
    const spredRef = useRef(null);

    useEffect(() => {
        if (productId) {
            // Flatten all products to find the selected one
            const allProducts = AllProductsList.flatMap(category => category.products);
            const found = allProducts.find((p) => p.id === productId);
            setSelectedProduct(found || null);
            setIsModalOpen(true);
        } else {
            setSelectedProduct(null);
            setIsModalOpen(false);
        }
        
        // Handle category scrolling based on URL hash
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                scrollToCategory(hash.substring(1));
            }, 100);
        }
    }, [productId]);

    const scrollToCategory = (categoryId) => {
        let ref = null;
        switch(categoryId) {
            case 'peanut-butter':
                ref = peanutButterRef;
                break;
            case 'nut-butter':
                ref = nutButterRef;
                break;
            case 'roasted-peanut':
                ref = roastedPeanutRef;
                break;
            case 'spred':
                ref = spredRef;
                break;
            default:
                return;
        }
        
        if (ref.current) {
            const yOffset = -80; // Adjust for header height
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const openProductDetails = (product) => {
        router.push(`/products/${product.id}`)
    }
    
    const closeProductDetails = () => {
        router.push('/products');
        setIsModalOpen(false);
    }
    
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">
                    Our Products
                </h2>

                {/* Categories */}
                {AllProductsList.map((category) => {
                    // Assign refs based on category name
                    let categoryRef = null;
                    if (category.categoryName.toLowerCase().includes('peanut butter')) {
                        categoryRef = peanutButterRef;
                    } else if (category.categoryName.toLowerCase().includes('nut butter')) {
                        categoryRef = nutButterRef;
                    } else if (category.categoryName.toLowerCase().includes('roasted peanut')) {
                        categoryRef = roastedPeanutRef;
                    } else if (category.categoryName.toLowerCase().includes('spred')) {
                        categoryRef = spredRef;
                    }
                    
                    return (
                        <div 
                            key={category.id} 
                            id={category.id}
                            ref={categoryRef}
                            className="mb-16 scroll-mt-20"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-8 pb-2 border-b-2 border-amber-200">
                                {category.categoryName}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {category.products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full"
                                    >
                                        <div className="h-48 bg-amber-200 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
                                            <button
                                                onClick={() => openProductDetails(product)}
                                                className="mt-auto text-[#6B8E23] hover:text-[#8B4513] font-semibold transition duration-300 flex items-center"
                                            >
                                                View Details →
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* Product Detail Modal */}
                {isModalOpen && selectedProduct && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-[#8B4513]">{selectedProduct.name}</h3>
                                <button 
                                    onClick={closeProductDetails}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="h-64 bg-amber-100 rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={selectedProduct.image}
                                                alt={selectedProduct.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-[#8B4513] mb-2 flex items-center">
                                                <Package className="mr-2" size={20} />
                                                Available Sizes
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProduct.sizes.map((size, index) => (
                                                    <span 
                                                        key={index}
                                                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {size}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Description</h4>
                                            <p className="text-gray-700">{selectedProduct.detailedDescription}</p>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-[#8B4513] mb-2 flex items-center">
                                                <Scale className="mr-2" size={20} />
                                                Ingredients
                                            </h4>
                                            <p className="text-gray-700">{selectedProduct.ingredients}</p>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-[#8B4513] mb-2">Nutrition Information</h4>
                                            <p className="text-gray-700">{selectedProduct.nutrition}</p>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-[#8B4513] mb-2 flex items-center">
                                                <CheckCircle className="mr-2" size={20} />
                                                Certifications
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProduct.certifications.map((cert, index) => (
                                                    <span 
                                                        key={index}
                                                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
                                                    >
                                                        {cert.includes('Organic') && <Leaf className="mr-1" size={14} />}
                                                        {cert.includes('Vegan') && <Heart className="mr-1" size={14} />}
                                                        {cert}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 flex justify-center">
                                    <button 
                                        onClick={closeProductDetails}
                                        className="bg-[#8B4513] hover:bg-[#6B8E23] text-white font-semibold py-3 px-8 rounded-xl transition duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}