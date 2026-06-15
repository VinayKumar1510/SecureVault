"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-center items-center px-8 py-16 gap-10 max-w-6xl mx-auto">
        <div data-aos="fade-right" className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Keep Your Passwords{" "}
            <span className="text-blue-600">Safe & Secure</span>
          </h2>
          <p className="text-gray-600 text-lg">
            SecureVault helps you generate, encrypt, and store your passwords
            safely. Access them anytime — all encrypted, all yours.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/signup")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer"
            >
              Create Free Account
            </button>
            <button
              onClick={() => router.push("/login")}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="md:w-1/2 flex justify-center items-center"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2897/2897782.png"
            alt="Secure Vault Illustration"
            width={400}
            height={400}
            className="drop-shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3
            className="text-3xl font-bold text-gray-900 mb-10"
            data-aos="fade-up"
          >
            Why Choose SecureVault?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              img="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              title="Client-Side Encryption"
              description="Your passwords are encrypted locally before being saved."
            />
            <FeatureCard
              img="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
              title="Smart Password Generator"
              description="Instantly create strong passwords with full customization."
            />
            <FeatureCard
              img="https://cdn-icons-png.flaticon.com/512/484/484613.png"
              title="Private & Secure Vault"
              description="Store and manage all your credentials in one encrypted place."
            />
          </div>
        </div>
      </section>

      {/* 👇 New “How It Works” Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            How It Works
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div
              data-aos="fade-right"
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3106/3106907.png"
                alt="Signup"
                width={100}
                height={100}
                className="mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                1. Create an Account
              </h4>
              <p className="text-gray-600 text-sm">
                Sign up with your email to get started and set up your secure vault.
              </p>
            </div>

            {/* Step 2 */}
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
                alt="Add Passwords"
                width={100}
                height={100}
                className="mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                2. Add Your Passwords
              </h4>
              <p className="text-gray-600 text-sm">
                Easily store your credentials with end-to-end encryption.
              </p>
            </div>

            {/* Step 3 */}
            <div
              data-aos="fade-left"
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                alt="Access Securely"
                width={100}
                height={100}
                className="mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                3. Access Securely
              </h4>
              <p className="text-gray-600 text-sm">
                Login anytime to securely access your saved passwords anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
