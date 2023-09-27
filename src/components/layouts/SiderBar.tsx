import Link from "next/link";
import React from "react";
import { Home, User2, FolderOpenDot, Phone } from "lucide-react";

function SiderBar() {
  return (
    <div className="hidden h-full flex-col items-center justify-center gap-6 bg-stone-300 px-4 dark:bg-stone-700 md:flex ">
      <Link href="/">
        <button className="rounded-full bg-stone-200 p-4  shadow-lg hover:bg-orange-600 dark:bg-stone-600">
          <Home className="h-10 w-10" />
        </button>
      </Link>
      <Link href="/about">
        <button className="rounded-full bg-stone-200 p-4  shadow-lg hover:bg-orange-600 dark:bg-stone-600">
          <User2 className="h-10 w-10 " />
        </button>
      </Link>
      <Link href="/projects">
        <button className="rounded-full  bg-stone-200 p-4  shadow-lg hover:bg-orange-600 dark:bg-stone-600">
          <FolderOpenDot className="h-10 w-10 " />
        </button>
      </Link>
      <Link href="/contact" className="">
        <button className="rounded-full bg-stone-200 p-4  shadow-md hover:bg-orange-600 dark:bg-stone-600">
          <Phone className="h-10 w-10 " />
        </button>
      </Link>
    </div>
  );
}

export default SiderBar;
