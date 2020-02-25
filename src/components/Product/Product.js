/* eslint-disable */
import React, { useContext } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

// Import Context
import { AppContext } from '../App';

const useStyles = makeStyles(theme => ({
  product: {
    margin: '10px',
    marginBottom: '10px',
    maxWidth: '300px',
    width: '300px',
    border: '1px solid rgba(0,0,0,.125)',
    height: '510px'
  },
  cardFooterBadge: {
    fontSize: '1rem'
  },
  cardBody: {
    flex: '1 1 auto',
    padding: '1.25rem'
  },
  cardImgTop: {
    width: '100%'
  },
  cardPrice: {
    fontSize: '18px',
    color: 'rgb(0, 125, 198)',
    fontWeight: '700'
  },
  cardFooter: {
    padding: '.75rem 1.25rem',
    backgroundColor: 'rgba(0,0,0,.03)',
    borderTop: '1px solid rgba(0,0,0,.125)'
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Product(props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);


  const addProductToCart = (product) => {
    console.log(product)
    dispatch({ type: 'ADD_PRODUCT_TO_CART', data: { product } });
  }

  return (
    <div classes={classes.product}>
      <img className={classes.cardImgTop} src={props.product.image} alt="" />
      <div className={classes.cardBody}>
        <span className={classes.cardPrice}>$ {props.product.price}</span>
        <h4>{props.product.name}</h4>
        <h5>{props.product.presentation.name} {props.product.presentation.value} {props.product.presentation.measure_unit}</h5>
        <h6 className="text-muted">{props.product.brand.name}</h6>
      </div>
      <div className={classes.cardFooter}>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={() => addProductToCart(props.product)}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}