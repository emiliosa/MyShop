/* eslint-disable */
import React, { useReducer, useEffect, useContext } from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import ProductList from "./Product/ProductList";
import CartContext from '../context/CartContext';
import SearchContext from '../context/SearchContext';
import { cartReducer, initialCartState } from '../reducers/CartReducer';
import { searchReducer, initialSearchState } from '../reducers/SearchReducer';
import ProductService from "../services/ProductService";

const useStyles = makeStyles(theme => ({
  mt5: {
    marginTop: '3rem!important'
  }
}));

export default function App() {
  debugger;
  const classes = useStyles();
  const useCartState = useReducer(cartReducer, initialCartState);
  const useSearchState = useReducer(searchReducer, initialSearchState);
  const products = ProductService.getProducts('');

  return (
    <>
      <CartContext.Provider value={useCartState}>
        <Header title="My shopping cart" />
        <ProductList products={products}/>
      </CartContext.Provider>
    </>
  );
}