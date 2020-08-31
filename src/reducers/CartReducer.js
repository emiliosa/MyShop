import ProductService from "../services/ProductService";

const calculateSubtotal = (products) => {
  let subtotal = products.reduce((subtotal, product) => {
    return subtotal + Number.parseInt(product.quantity) * Number.parseFloat(product.price);
  }, 0);

  return Number.parseFloat(subtotal).toFixed(2);
};

export const initialCartState = {
  data: { products: [], quantity: 0 }
};

export const cartReducer = (state, action) => {
  let product = null;

  debugger;

  switch (action.type) {
    case 'ADD_SEARCH':
      console.log("ADD_SEARCH", state, action);

      return {
        data: {
          products: ProductService.getProducts(action.data.search)
        }
      }

    case 'ADD_PRODUCT_TO_CART':
      console.log("ADD_PRODUCT_TO_CART", state, action);
      product = state.data.products.filter(element => action.data.product.id === element.id);

      state.data.quantity++;

      // product does not exists in cart, add it with quantity = 1
      if (product.length === 0) {
        action.data.product.quantity = 1;
        state.data.products = state.data.products.concat({ ...action.data.product });
      } else {
        state.data.products.forEach(element => {
          if (element.id === product[0].id) {
            element.quantity++;
          }
        });
      }

      return {
        data: {
          products: state.data.products,
          quantity: state.data.quantity,
          subtotal: calculateSubtotal(state.data.products)
        }
      }

    case 'REMOVE_PRODUCT_FROM_CART':
      console.log("REMOVE_PRODUCT_FROM_CART", state, action);
      product = state.data.products.filter(element => action.data.product.id === element.id);

      state.data.quantity--;

      // product exists in cart
      if (product.length !== 0) {
        state.data.products.forEach((element, index, object) => {
          if (element.id === product[0].id) {
            element.quantity--;
            if (element.quantity === 0)
              object.splice(index, 1);
          }
        });
      }

      return {
        data: {
          products: state.data.products,
          quantity: state.data.quantity,
          subtotal: calculateSubtotal(state.data.products)
        }
      }

    default:
      return [];
  }
};