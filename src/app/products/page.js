import AllProducts from '@/components/AllProductComponent/AllProducts';
import React, { Suspense } from "react";

export const metadata = {
  title: 'Product | Indian FoodTech',
  description: 'Discover Indian FoodTech’s premium range of peanut butter products crafted with quality ingredients. Explore smooth, crunchy, and custom formulations designed for taste, nutrition, and versatility—perfect for retail, bulk supply, or private label solutions.',
};

const ProductPage = () => (
  <>
    <Suspense fallback={<div className="p-12 text-center">Loading products...</div>}>
      <AllProducts/>
    </Suspense>
  </>
);

export default ProductPage;