export const generateStaticParams = async ({
  params
}: {
  params: { category: string }
}) => {
  return [{ pageNumber: '1' }, { pageNumber: '2' }];
};
export default function ({ params }: { params: { category: string, pageNumber: string, } }) {
  return (
    <h1>
      Produkt z kategorii {params.category}, na stronie {params.pageNumber}.
    </h1>
  );
}