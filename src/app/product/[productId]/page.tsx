import { getProductById } from '@/api/products';
import { ProductListItem } from '@/ui/molecules/ProductListItem';
import { type Metadata } from 'next';

// export const metadata = {
//   title: 'Products',
//   description: 'List of products',
// };

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
  return (<>
      <ProductListItem product={product}/>
    </>
  );
}