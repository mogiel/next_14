import {formatMoney} from "@/utils/formatMoney";

export type Props = {
    product: Product;
}

export const ProductListItemDescription = (props: Props) => {
    return <div className={'mt-2 flex justify-between'}>
        <div>
            <h3 className={'text-sm font-semibold text-gray-700'}>
                {props.product.name}
            </h3>
            <p className={'text-sm text-gray-500'}>
                <span className={'sr'}>Kategoria: </span>{props.product.category}
            </p>
        </div>
        <p className={''}>
            <span className={'sr-only'}>Cena: </span>{formatMoney(props.product.price / 100, props.product.currency)}
        </p>
    </div>;
};