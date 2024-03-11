import { ProductCoverImage } from '@/ui/atoms/ProductCoverImage';
import { ProductListItemDescription } from '@/ui/atoms/ProductListItemDescription';
import Link from 'next/link';

type Props = {
  product: Product,
}

export const ProductListItem = (props: Props) => {
  return <li>
    <Link href={`/product/${props.product.id}`}>
      <article>
        <ProductCoverImage {...props.product}/>
        <ProductListItemDescription product={props.product}/>
      </article>
    </Link>
  </li>;
};