import { ProductListItem } from '@/ui/molecules/ProductListItem';

export const ProductList = ({}) => {
  return <ul className={'grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
    <ProductListItem
      product={{
        description: { product: { name: 'Kot', category: 'Zwierzę', price: 1000, currency: 'PLN' } },
        image: {
          image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
          alt: 'p'
        }
      }}
    />
    <ProductListItem
      product={{
        description: { product: { name: 'Kot', category: 'Zwierzę', price: 1000, currency: 'PLN' } },
        image: {
          image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
          alt: 'p'
        }
      }}
    />
    <ProductListItem
      product={{
        description: { product: { name: 'Kot', category: 'Zwierzę', price: 1000, currency: 'PLN' } },
        image: {
          image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
          alt: 'p'
        }
      }}
    />
    <ProductListItem
      product={{
        description: { product: { name: 'Kot', category: 'Zwierzę', price: 1000, currency: 'PLN' } },
        image: {
          image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
          alt: 'p'
        }
      }}
    />
  </ul>;
};