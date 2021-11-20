import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Cart(props) {

    const totalvalue = props.finalitems
        .map(cartlist => {return cartlist.value})
        .reduce((total,value) => total + value);

  return (
    <div id="cart">
      <h1>Your Cart Items</h1>
      {totalvalue > 0 &&
        <div>
            <ListGroup>
                {props.finalitems.filter(cartlist => cartlist.value > 0).map((cartlist) => (
                <ListGroupItem key={cartlist.id}>
                    <div className="cart-img">
                    <img src={cartlist.image} alt="product img" />
                    <h5>{cartlist.desc}</h5>
                    </div>
                    <div className="final-qty">Quantity: {cartlist.value}</div>
                </ListGroupItem>
                ))}
            </ListGroup><br />
            <Link to="/signin" className="btn btn-primary">
            Check Out
            </Link>
        </div>
      }
      {totalvalue === 0 &&
        <div>
            <p>There are 0 items in your cart.</p>
            <Link to="/" className="btn btn-success">
            Continue Shopping
            </Link>
        </div>
      }
    </div>
  );
}
