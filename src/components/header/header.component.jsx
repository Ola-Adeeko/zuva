import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { FaTimes, FaBars } from "react-icons/fa";

import "./header.style.scss";
import { useState } from "react";

const Header = ({ currentUser, hidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        <span className="logo">
          <span className="top">ZUVA</span> WORLD
        </span>
      </Link>
      <div className={` ${isOpen ? "" : "options-close"} options`}>
        <Link className="option" to="/shop" onClick={() => setIsOpen(false)}>
          SHOP
        </Link>
        <Link className="option" to="/contact" onClick={() => setIsOpen(false)}>
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              setIsOpen(false);
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link
            className="option"
            to="/signin"
            onClick={() => setIsOpen(false)}
          >
            SIGN IN
          </Link>
        )}
        <div className="ct-icon">
          <CartIcon />
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
      <div className="c-icon">
        <CartIcon />
        <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
