import Link from "next/link";
import React from "react";
import { Home, User2, FolderOpenDot, Phone } from "lucide-react";

function SiderBar() {
  return (
    <div className="hidden h-full flex-col items-center justify-center gap-6 bg-stone-700 px-4 md:flex ">
      <Link href="/">
        <button className="rounded-full bg-stone-600 p-4 shadow-lg">
          <Home className="h-10 w-10" />
        </button>
      </Link>
      <Link href="/">
        <button className="rounded-full bg-stone-600 p-4 shadow-lg">
          <User2 className="h-10 w-10 " />
        </button>
      </Link>
      <Link href="/">
        <button className="rounded-full bg-stone-600 p-4 shadow-lg">
          <FolderOpenDot className="h-10 w-10 " />
        </button>
      </Link>
      <Link href="/">
        <button className="rounded-full bg-stone-600 p-4 shadow-md">
          <Phone className="h-10 w-10 " />
        </button>
      </Link>
    </div>
  );
}

export default SiderBar;
