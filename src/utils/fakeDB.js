// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  //get the Applied Jobs from local storage
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("applied-jobs", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};

  //get the Applied Jobs from local storage
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("applied-jobs", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-jobs");
};

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };
