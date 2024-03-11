import { type Metadata } from 'next';
import { getProductById } from '@/api/products';
import { ProductListItem } from '@/ui/molecules/ProductListItem';

export const generateMetadata = async ({ params }: { params: { productId: string } }): Promise<Metadata> => {
  const product = await getProductById(params.productId);
  return {
    title: `Product: ${product.name}`,
    description: product.description,
    openGraph: {
      title: `Product: ${product.name}`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    }
  };
};

export default async function SingleProductPage({ params, searchParams }: {
  params: { productId: string },
  searchParams: { [key: string]: string | string [] }
}) {
  const product = await getProductById(params.productId);
  console.log(searchParams);
  return (<>
      <ProductListItem product={product}/>
    </>
  );
}