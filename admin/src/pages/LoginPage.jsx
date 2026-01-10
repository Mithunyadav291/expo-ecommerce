import React from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
};

export default LoginPage;
