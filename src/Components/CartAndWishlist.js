import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { update } from "../Redux/Slicer/ProductSlice"

const CartAndWishlist = ({ type }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.Product?.products) || [];

  const filteredItems =
    type === "cart"
      ? products.filter((product) => product.isAddedToCart)
      : products.filter((product) => product.isWishlist);

  const updateList = (product) => {
    const updatedProducts = products.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          isAddedToCart: type === "cart" ? !item.isAddedToCart : true,
          isWishlist: type === "wishlist" ? !item.isWishlist : false,
        };
      }
      return item;
    });
    dispatch(update(updatedProducts));
  };

  const calculateTotal = () => {
    return filteredItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        {type === "cart" ? "Shopping Cart" : "Wishlist"}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              {type === "cart" && <TableCell align="right">Quantity</TableCell>}
              {type === "cart" && <TableCell align="right">Total</TableCell>}
              {type === "wishlist" && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                {type === "cart" && (
                  <TableCell align="right">{item.quantity}</TableCell>
                )}
                {type === "cart" && (
                  <TableCell align="right">
                    ${item.price * item.quantity}
                  </TableCell>
                )}
                {type === "wishlist" && (
                  <TableCell>
                    <Button onClick={() => updateList(item)}>
                      Add to Cart
                    </Button>
                    <Button onClick={() => updateList(item)}>Remove</Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {type === "cart" && (
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <Typography variant="h6">
            Total: ${Math.round(calculateTotal())}
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default CartAndWishlist;
