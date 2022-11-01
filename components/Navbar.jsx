import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../public/React_3.png";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src={logo}
                alt="React Conf Logo"
                className="flex-shrink-0 items-start -pl-36 flex"
                data-testid="homepageLogo"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-36 flex items-center justify-center space-x-16">
                <Link
                  href="#"
                  className=" hover:bg-c_yellow hover:text-white px-3 py-2 rounded-md text-base font-inter"
                >
                  About us
                </Link>

                <Link
                  href="#"
                  className=" hover:bg-c_yellow hover:text-white px-3 py-2 rounded-md text-base font-inter"
                >
                  What we do
                </Link>

                <Link
                  href="#"
                  className=" hover:bg-c_yellow hover:text-white px-3 py-2 rounded-md text-base font-inter"
                >
                  Our Work
                </Link>

                <Link
                  href="#"
                  className=" hover:bg-c_yellow hover:text-white px-3 py-2 rounded-md text-base font-inter"
                >
                  Blog
                </Link>

                <Link
                  href="#"
                  className=" hover:bg-c_yellow hover:text-white px-3 py-2 rounded-md text-base font-inter"
                >
                  Say hi
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-c_blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#"
                className="hover:bg-c_yellow block px-3 py-2 rounded-md text-base font-inter"
              >
                About us
              </Link>

              <Link
                href="#"
                className=" hover:bg-c_yellow hover:text-white block px-3 py-2 rounded-md text-base font-inter"
              >
                What we do
              </Link>

              <Link
                href="#"
                className=" hover:bg-c_yellow hover:text-white block px-3 py-2 rounded-md text-base font-inter"
              >
                Our Work
              </Link>

              <Link
                href="#"
                className=" hover:bg-c_yellow hover:text-white block px-3 py-2 rounded-md text-base font-inter"
              >
                Blog
              </Link>

              <Link
                href="#"
                className=" hover:bg-c_yellow hover:text-white block px-3 py-2 rounded-md text-base font-inter"
              >
                Say hi
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
