export const getProducts = async () => {
  const res = await fetch('https://naszsklep-api.vercel.app/api/products');
  const productsResponse = (await res.json()) as ProductRes[];
  return productsResponse.map((product: ProductRes): Product => {
      return ProductResReturnProduct(product);
    }
  );
};

export const getProductById = async (id: ProductRes['id']) => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
  const productResponse = (await res.json()) as ProductRes;
  return ProductResReturnProduct(productResponse);
};

const ProductResReturnProduct = (productResponse: ProductRes): Product => ({
  id: productResponse.id,
  name: productResponse.title,
  category: productResponse.category,
  price: productResponse.price,
  currency: 'PLN',
  image: productResponse.image,
  alt: productResponse.title,
  description: productResponse.description,
});