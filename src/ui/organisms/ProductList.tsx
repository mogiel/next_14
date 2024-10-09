import {ProductListItem} from '@/ui/molecules/ProductListItem';

const ProductsListData: Product[] = [
    {
        id: '1',
        name: 'Kot',
        category: 'Zwierzę',
        price: 1000,
        currency: 'PLN',
        image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
        alt: 'p'
    },
    {
        id: '2',
        name: 'Kot',
        category: 'Zwierzę',
        price: 1000,
        currency: 'PLN',
        image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
        alt: 'p'
    },
    {
        id: '3',
        name: 'Kot',
        category: 'Zwierzę',
        price: 1000,
        currency: 'PLN',
        image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
        alt: 'p'
    },
    {
        id: '4',
        name: 'Kot',
        category: 'Zwierzę',
        price: 1000,
        currency: 'PLN',
        image: 'https://zakopizapomnij.pl/wp-content/uploads/2019/08/Notokoty-Maj-25-%E2%80%94-kopia.jpg',
        alt: 'p'
    },
];

export const ProductList = ({}) => {
    return <ul className={'grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}
               data-testid="products-list">
        {
            ProductsListData.map((product: Product) => <ProductListItem key={product.id} product={product}/>)
        }
    </ul>;
};