import { ProductList } from '@/ui/organisms/ProductList';
import { getProducts } from '@/api/products';

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <ProductList data-testid="products-list" products={products}/>
  );
}
