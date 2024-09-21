// localstorage set value as string
// therefore in order to add item the local storage value we have to use JSON.stringify()
// and in order to use that vlaue we have to JSON.parse()

// Set an item to localStorage
// localStorage.setItem('key','value')
// example : localStorage.setItem('cart',[])

//remove an item from localStorage
// localStorage.remove('cart')

// In order to get an item from localstorage
// 1. First, we have to check whether there is an item in the local storage or not
// 2. We will check that by localStorage.getItem()

const getSortedCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getSortedCart();
  cart.push(id);
  // save to local storage
  saveCartToLS(cart);
};

export { addToLS, getSortedCart };
