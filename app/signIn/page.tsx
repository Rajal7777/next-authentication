"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setMessage("Email and password are required");
      setLoading(false);
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 border space-y-4">
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        <input
          name="email"
          type="email"
          placeholder="email"
          className="w-full border px-3 py-2"
        />

        <input
          name="password"
          type="password"
          placeholder="password"
          className="w-full border px-3 py-2"
        />

        <button
          disabled={loading}
          className="w-full bg-gray-500 text-white py-2"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {message && <p className="text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default Login;