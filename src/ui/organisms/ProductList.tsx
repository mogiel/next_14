import { ProductListItem } from '@/ui/molecules/ProductListItem';

export const ProductList = ({ products }: { products: Product[] }) => {
  return <ul className={'grid grid-cols-1 gap-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
    {products.map((product: Product) => <ProductListItem key={product.id} product={product}/>)}
  </ul>;
};