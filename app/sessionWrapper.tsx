"use client";
import { useSession } from "next-auth/react";
import SignOut from "./SignOut";
import Link from "next/link";

const SessionWrapper = () => {
    const { data: session } = useSession();


    return (
        <>
            <p>{session && 'Signed In successfully'} user data: {JSON.stringify(session)}</p>
            {session ? <SignOut /> : (
                <button>
                    <Link href='/signIn'>Sign In</Link>
                </button>
            )}
        </>
    );
};

export default SessionWrapper;
