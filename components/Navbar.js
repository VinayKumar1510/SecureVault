"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => router.push("/")}
      >
        🔐 SecureVault
      </h1>
      <nav className="flex gap-4">
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 text-blue-600 border cursor-pointer border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}
