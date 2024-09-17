"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "../ui/button";

export default function HomeNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b fixed top-0 left-0 right-0 w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-6xl items-center justify-between md:py-4 lg:px-4 xl:px-0 py-3 px-3"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <AlignJustify width={30} strokeWidth={1.25} />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-5">
          <Link
            href="/"
            className="text-base leading-6 duration-300 ease-in hover:text-blue-500 text-gray-900"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-base leading-6 duration-300 ease-in hover:text-blue-500 text-gray-900"
          >
            Blog
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:justify-end ml-10 gap-4">
          <Link href="/" className="outline-none no-underline">
            <Button
              variant={"outline"}
              size={"default"}
              className="outline-none"
            >
              Log in
            </Button>
          </Link>

          <Link href="/" className="outline-none no-underline">
            <Button
              variant={"primary"}
              size={"default"}
              className="outline-none"
            >
              Start Assessment
            </Button>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white md:p-4 p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X width={30} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
              </div>
              <div className="py-4">
                <div className="flex justify-start gap-4">
                  <Link href="/" className="outline-none no-underline">
                    <Button
                      variant={"outline"}
                      size={"default"}
                      className="outline-none"
                    >
                      Log in
                    </Button>
                  </Link>

                  <Link href="/" className="outline-none no-underline">
                    <Button
                      variant={"primary"}
                      size={"default"}
                      className="outline-none"
                    >
                      Start Assessment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
