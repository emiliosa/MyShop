/* eslint-disable */
import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import ProductService from "../../services/ProductService";
import Product from "./Product";

const useStyles = makeStyles(theme => ({
  containerFluid: {
    width: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  cardDeck: {
    display: 'flex'
  },
}));

export default function ProductList(props) {
  const products = ProductService.getProducts();
  const classes = useStyles();

  return (
    <div className={classes.containerFluid, classes.mt5, classes.cardDeck}>
      {products && products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}