/* eslint-disable */
import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Product from "./Product";
import ProductService from "../../services/ProductService";
import SearchContext from '../../context/SearchContext';
import CartContext from '../../context/CartContext';

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
  debugger;
  // const [state, dispatch] = React.useContext(SearchContext);
  // const [search, setSearch] = React.useState(() => (state.data.search));
  const [state, dispatch] = React.useContext(CartContext);
  // const [products, setProducts] = React.useState(() => (state.data.products));
  const classes = useStyles();

  return (
    <div className={classes.containerFluid, classes.mt5, classes.cardDeck}>
      {props.products && props.products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}