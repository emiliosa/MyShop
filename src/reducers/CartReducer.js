export const initialCartState = {
  data: { products: [], quantity: 0 }
};

function calculateSubtotal(products) {
  let subtotal = 0;
  
  for (let product of products) {
    subtotal += Number.parseInt(product.quantity) * Number.parseFloat(product.price);
  }

  return Number.parseFloat(subtotal).toFixed(2);
}

export const cartReducer = (state, action) => {
  debugger
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      let products;
      let product = state.data.products.filter(element => action.data.product.id === element.id);

      state.data.quantity++;

      // si el producto no existe en el carrito, lo agrego con cantidad 1
      if (product.length === 0) {
        action.data.product.quantity = 1;
        products = state.data.products.concat({ ...action.data.product });
      } else {
        state.data.products.forEach(element => {
          if (element.id === product[0].id) {
            element.quantity++;
          }
        });
        products = state.data.products;
      }

      return {
        data: {
          products: products,
          quantity: state.data.quantity,
          subtotal: calculateSubtotal(products)
        }
      }

    case 'REMOVE_PRODUCT_FROM_CART':
      console.log("REMOVE_PRODUCT_FROM_CART", action.data.product);

    default:
      return state;
  }
};