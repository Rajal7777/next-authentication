import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      //This will create a login form with username and password field
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your email address",
        },
        password: { label: "Password", type: "password" },
      },
      //this function will be called every time user login
      async authorize(credentials) {
        console.log(credentials); //{csrfToken: 'acd5218eaf083a6208380d85e42cc32a982d276bac0df12012e2c134c94ac217', username: 'test@test.com',password: '12345'}

        //Extract values
        const username = credentials?.username;
        const password = credentials?.password;

        if (typeof username !== "string" || typeof password !== "string") {
          return null;
        }

        if (username === "test@test.com" && password === "12345") {
          return {
            id: "1",
            name: "Admin",
            email: username,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? "";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signIn'
  }
};
