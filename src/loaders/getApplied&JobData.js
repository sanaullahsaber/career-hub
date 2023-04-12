import { getStoredCart } from "../utils/fakeDB";

// setCart(newArr);

export const productsAndCartData = async () => {
  const productsData = await fetch("featuredJobs.json");
  const products = await productsData.json();

  const savedCart = getStoredCart();
  let cartArray = [];

  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      cartArray.push(foundProduct);
    }
  }
  return { cartArray, products };
};
