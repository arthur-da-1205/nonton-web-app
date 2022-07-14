import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BellIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled && "bg-[#1D1D27]"
      } fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className="flex items-center space-x-2 md:space-x-10 md:px-2 md:py-1">
        <div className="flex justify-center space-x-3 items-center">
          <Image
            src="/icons/popcorn.svg"
            alt="Sini Nonton"
            width={40}
            height={40}
            className="cursor-pointer object-contain"
          />
          <h1 className="text-xl font-bold text-white">Sini Nonton</h1>
        </div>

        <ul className="hidden space-x-4 md:flex">
          <li className="cursor-pointer text-sm font-light hover:text-gray-500 text-[#e5e5e5] transition duration-[.4s]">
            Home
          </li>
          <li className="cursor-pointer text-sm font-light hover:text-gray-500 text-[#e5e5e5] transition duration-[.4s]">
            TV Shows
          </li>
          <li className="cursor-pointer text-sm font-light hover:text-gray-500 text-[#e5e5e5] transition duration-[.4s]">
            Movies
          </li>
          <li className="cursor-pointer text-sm font-light hover:text-gray-500 text-[#e5e5e5] transition duration-[.4s]">
            New & Popular
          </li>
          <li className="cursor-pointer text-sm font-light hover:text-gray-500 text-[#e5e5e5] transition duration-[.4s]">
            My List
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <UserIcon className="cursor-pointer rounded h-6 w-6" />
        </Link>
      </div>
    </header>
  );
};
