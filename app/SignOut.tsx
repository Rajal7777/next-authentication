"use client";
import { signOut } from "next-auth/react";

const SignOut = () => {
  function handleSignout() {
    signOut();
  }
  return <button onClick={handleSignout}>Sign Out</button>;
};

export default SignOut;
