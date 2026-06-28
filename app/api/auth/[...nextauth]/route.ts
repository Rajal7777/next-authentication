import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/auth";

export const { handlers: { GET, POST } } = NextAuth(authOptions);