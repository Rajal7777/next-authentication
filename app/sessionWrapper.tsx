"use client";
import { useSession } from "next-auth/react";
import SignOut from "./SignOut";

const SessionWrapper = () => {
  const { data: session } = useSession();

  return (
    <>
      <p>{session && 'Signed In successfully'} user data: {JSON.stringify(session)}</p>
      <SignOut />
    </>
  );
};

export default SessionWrapper;
: