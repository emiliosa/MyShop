/* eslint-disable */
import React, { useContext } from 'react';
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

// Import Context
import { AppContext } from './App';
import { Table, TableBody, TableRow, TableHead, TableCell, TextField, TableFooter } from '@material-ui/core';

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

export default function FullScreenDialog(props) {
  const { state, dispatch } = useContext(AppContext);
  const classes = useStyles();
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
    debugger
    setQuantity({[e.target.name]: e.target.value});
  }

  const handleProductPrice = (quantity, price) => {
    return '$ ' + Number.parseFloat(Number.parseFloat(price) * Number.parseInt(quantity)).toFixed(2);
  }

  const handleRemoveProductFromCart = (id) => {
    debugger
    //dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', data: { product } });
  }

  const handleUsePersistedState = () => {
    debugger
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
                <TableCell><img style={{width: "20%"}} src={product.image} /></TableCell>
                <TableCell>{product.name} ({product.brand.name})</TableCell>
                <TableCell>Cantidad: {product.quantity}</TableCell>
                  {/* <TextField 
                    type="number" 
                    InputProps={{ name: `quantity-product-id-${product.id}`, inputMode: "numeric" }} 
                    value={quantity}
                    onChange={(e) => handleQuantity(e) }
                  /> */}
                <TableCell><>{handleProductPrice(product.quantity, product.price)}</></TableCell>
                <TableCell>
                  <IconButton edge="start" color="inherit" onClick={() => handleRemoveProductFromCart(product.id)} >
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
                <TableCell>$ {state.data.subtotal}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AppBar>
      </Dialog>
    </div>
  );
}