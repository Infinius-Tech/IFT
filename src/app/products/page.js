import AllProducts from '@/components/AllProductComponent/AllProducts';
import React, { Suspense } from "react";

export const metadata = {
  title: 'Product | Peanut Butter',
  description: '',
};

const ProductPage = () => (
  <>
    <Suspense fallback={<div className="p-12 text-center">Loading products...</div>}>
      <AllProducts/>
    </Suspense>
  </>
);

export default ProductPage;