import { ProductList } from '@/ui/organisms/ProductList';

export default function Home() {
  return (
    <section className={'ms-auto max-w-md sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'}>
      <ProductList data-testid="products-list"/>
    </section>
  );
}
