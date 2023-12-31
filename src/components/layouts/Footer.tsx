import Link from "next/link";
import React from "react";
import { Home, User2, FolderOpenDot, Phone } from "lucide-react";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-center gap-6 bg-stone-300  py-4 dark:bg-stone-700 md:hidden md:py-8">
      <Link href="/">
        <button className="rounded-full bg-stone-200 p-4 shadow-lg dark:bg-stone-600 md:p-4">
          <Home className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
      <Link href="/about">
        <button className="rounded-full bg-stone-200 p-4 shadow-lg dark:bg-stone-600">
          <User2 className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
      <Link href="/projects">
        <button className="rounded-full bg-stone-200 p-4 shadow-lg dark:bg-stone-600">
          <FolderOpenDot className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
      <Link href="/contact">
        <button className="rounded-full bg-stone-200 p-4 shadow-md dark:bg-stone-600">
          <Phone className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
    </div>
  );
}

export default Footer;
