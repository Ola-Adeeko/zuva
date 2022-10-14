import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.style.scss";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const redirectPath = location.state?.path || "/shop";

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //       await auth.signInWithEmailAndPassword(email, password);
  //       setEmail("");
  //       setPassword("");

  //       navigate(redirectPath, { replace: true });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password);

    setEmail("");
    setPassword("");

    navigate(redirectPath, { replace: true });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
