import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Pulse point</span>
        <div className="flex flex-row items-center gap-1">
          <Image
            alt="pulse point logo"
            src="/svgs/logo.svg"
            width={100}
            height={100}
            className="h-8 w-auto"
          />
          <div>
            <h2 className="text-xl font-medium text-blue-500">Pulse Point</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
