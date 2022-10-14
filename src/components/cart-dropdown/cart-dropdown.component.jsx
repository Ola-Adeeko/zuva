import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, toggleCartHidden, hidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Link to="/checkout">
      <CustomButton inverted onClick={() => (hidden ? "" : toggleCartHidden())}>
        GO To CHECKOUT
      </CustomButton>
    </Link>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
