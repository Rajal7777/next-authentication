'use client';

import React from "react";
import { useSession } from "next-auth/react";


export default function Home() {
const {data: session} = useSession()

  return (
   <div> {JSON.stringify(session)}  home</div>
  );
}
