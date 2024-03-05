import { ProductCoverImage } from '@/ui/atoms/ProductCoverImage';
import {
  ProductListItemDescription,
} from '@/ui/atoms/ProductListItemDescription';

type Props = {
  product: Product,
}

export const ProductListItem = (props: Props) => {
  return <li>
    <article>
      <ProductCoverImage {...props.product}/>
      <ProductListItemDescription product={props.product}/>
    </article>
  </li>;
};