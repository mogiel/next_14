import { ProductCoverImage, type ProductCoverImageProps } from '@/ui/atoms/ProductCoverImage';
import {
  ProductListItemDescription,
  type ProductListItemDescriptionProps
} from '@/ui/atoms/ProductListItemDescription';

type Props = {
  product: {
    image: ProductCoverImageProps
    description: ProductListItemDescriptionProps
  }
}

export const ProductListItem = (props: Props) => {
  return <li>
    <article>
      <ProductCoverImage {...props.product.image}/>
      <ProductListItemDescription {...props.product.description}/>
    </article>
  </li>;
};