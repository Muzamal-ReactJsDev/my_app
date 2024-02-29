import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCartItem, addCartItem } from "../Features/UserDataSlice";
import "./Cart.css";
function Cart() {
  // Access cart items from Redux store
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.cart);
  console.log(items, "Cart Items in the Cart Folder");
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(totalPrice, "kkk");
  // State to track quantity

  const removeFromCart = (itemsToRemove) => {
    console.log(itemsToRemove, "items to removefrom cart");
    dispatch(RemoveCartItem(itemsToRemove));
  };
  const AddToCart = (itemstoadd) => {
    console.log(itemstoadd, "items to add in Cart");
    const totalitemsadd = {
      ...itemstoadd,
      quantity: 1,
    };
    dispatch(addCartItem(totalitemsadd));
  };

  return (
    <div>
      <h2>Cart</h2>
      <Container>
        <Row>
          {items.length > 0 ? (
            items?.map((item, id) => {
              return (
                <>
                  <Col xs={12}>
                    <div key={item.id} className="cart-main-div">
                      <p>Title: {item.title}</p>
                      <p>Price: {item.price}</p>
                      <div className="cart-quantity">
                        {item.quantity > 0 && (
                          <Button
                            className="cart-minus-btn"
                            onClick={() => {
                              removeFromCart(item);
                            }}
                          >
                            -
                          </Button>
                        )}

                        <p>Quantity: {item.quantity}</p>

                        <Button
                          className="cart-plus-btn"
                          onClick={() => {
                            AddToCart(item);
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })
          ) : (
            <h4>Cart is Empty</h4>
          )}
          <div>Total Price: {totalPrice}</div>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
