export default function Page({params}: { params: { productId: string } }) {
    return <div>Page {params.productId}</div>
}