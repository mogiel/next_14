import { ProductList } from '@/ui/organisms/ProductList';
import { getProducts } from '@/api/products';
import { Suspense } from 'react';

export default async function ProductPage() {
  const products = await getProducts();
  return (<>
      <ProductList data-testid="products-list" products={products}/>
      <Suspense>
        <ProductList data-testid="products-list" products={products}/>
      </Suspense>
    </>
  );
}
