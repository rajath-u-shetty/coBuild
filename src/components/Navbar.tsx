import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxwidthWrapper";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-zinc-800">
            Co<span className="text-red-500">Build</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-800 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-800 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-800 transition-colors"
            >
              Community
            </Link>

          </div>

          {/* Authentication Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className={buttonVariants({
                size: "lg",
                className:
                  "hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md",
              })}
            >
              Login
            </Link>

            <div className="hidden sm:block h-6 w-px bg-zinc-300" />

            <Link
              href="/sign-up"
              className={buttonVariants({
                size: "lg",
                className:
                  "hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium text-green-600 border border-green-600  transition-colors rounded-md",
              })}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;


