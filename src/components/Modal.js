/* eslint-disable */
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Slide from '@material-ui/core/Slide';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { render } from 'react-dom';
import Badge from '@material-ui/core/Badge';
import { Table, TableBody, TableRow, TableHead, TableCell, TextField, TableFooter } from '@material-ui/core';
import CartContext from '../context/CartContext';

function usePersistedState(key, defaultValue) {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

const useStyles = makeStyles(theme => ({
  appBarTop: {
    position: 'relative',
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const classes = useStyles();
  const [state, dispatch] = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(true);
  const [products, setProducts] = React.useState(() => (state.data.products));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantity = (e) => {
    setQuantity({[e.target.name]: e.target.value});
  }

  const handleProductPrice = (quantity, price) => {
    return '$ ' + Number.parseFloat(Number.parseFloat(price) * Number.parseInt(quantity)).toFixed(2);
  }

  const handleRemoveProductFromCart = (product) => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', data: { product } });
  }

  const handleUsePersistedState = () => {
    console.log(this.usePersistedState)
  }

  return (
    <div>
      <IconButton aria-label="show shopping cart" color="inherit" onClick={handleClickOpen}>
        <Badge badgeContent={state.data.quantity} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBarTop}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Table>
          <TableHead></TableHead>
          <TableBody>
            {state.data.products.map(product => 
              <TableRow key={product.id}>
                <TableCell align="left"><img style={{width: "20%"}} src={product.image} /></TableCell>
                <TableCell align="center">{product.name} ({product.brand.name})</TableCell>
                <TableCell align="center">Cantidad: {product.quantity}</TableCell>
                  {/* <TextField 
                    type="number" 
                    InputProps={{ name: `quantity-product-id-${product.id}`, inputMode: "numeric" }} 
                    value={quantity}
                    onChange={(e) => handleQuantity(e) }
                  /> */}
                <TableCell align="right"><>{handleProductPrice(product.quantity, product.price)}</></TableCell>
                <TableCell align="right">
                  <IconButton edge="start" color="inherit" onClick={() => handleRemoveProductFromCart(product)} >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <AppBar position="fixed" color="inherit" className={classes.appBarBottom}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Subtotal $ {state.data.subtotal}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AppBar>
      </Dialog>
    </div>
  );
}