import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{
        height: `${NAVBAR_HEIGHT}px`,
      }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href={"/"}
            className="cursour-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src={"/logo.svg"}
                alt="logo rentiful"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                RENT
                <span className="text-secondary-500 hover:!text-primary-300">
                  IFUL
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-200 hidden md:block">
          Discover your perfect rental appartment with our advanced platform.
        </p>
        <div className="flex items-center gap-5">
          <Link href={"/login"}>
            <Button
              variant={"outline"}
              className="hover:bg-white hover:text-primary-700 text-white bg-transparent rounded-lg"
            >
              Login
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button
              variant={"outline"}
              className="bg-secondary-600 hover:bg-white hover:text-primary-700 text-white rounded-lg border-none"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
