import React, { useEffect } from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUpPage = () => {
  useEffect(() => {
    document.title = "Zuva | Register";
  }, []);
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
