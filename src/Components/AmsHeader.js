/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import AmsLogo from "../images/AMS-LOGO.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AmsHeader() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">homepage</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={AmsLogo}
                alt="amsLogo"
                
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden"></div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Cost Estimation
            </a>
            <a
              href="/commisionCalculator"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Commision Calculator
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}
