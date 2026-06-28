import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Entere your email adress",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
      },
     
    }),
  ],
   session: {
        strategy: "jwt",
      },
      secret: process.env.AUTH_SECRET,
};
