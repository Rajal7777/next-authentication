"use client";

import { useSession } from "next-auth/react"
import Link from "next/link";

export default function Component() {
  const { data: session, status } = useSession()
console.log("session", session)
  if (status === "authenticated") {
    return <p>Signed In successfully || {JSON.stringify(session)}</p>
  }

return !session && <Link href="/api/auth/signin">Sign in</Link>
}