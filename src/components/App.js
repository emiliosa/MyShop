/* eslint-disable */
import React, { useReducer } from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import ProductList from "./Product/ProductList"

const useStyles = makeStyles(theme => ({
  mt5: {
    marginTop: '3rem!important'
  }
}));

// Create context object
export const AppContext = React.createContext();

// Set up Initial State
const productState = {
  data: {products: [], quantity: 0}
};

function calculateSubtotal(products) {
  let subtotal = 0;
  
  for (let product of products) {
    subtotal += Number.parseInt(product.quantity) * Number.parseFloat(product.price);
  }

  debugger
  return Number.parseFloat(subtotal).toFixed(2);
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      let products;
      let product = state.data.products.filter(element => action.data.product.id === element.id);
      //debugger

      state.data.quantity++;

      // si el producto no existe en el carrito, lo agrego con cantidad 1
      if (product.length === 0) {
        action.data.product.quantity = 1;
        products = state.data.products.concat({ ... action.data.product});
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
      return productState;
  }
}

export default function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, productState);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Header title="My shopping cart" />
        <ProductList />
      </AppContext.Provider>
    </>
  );
}