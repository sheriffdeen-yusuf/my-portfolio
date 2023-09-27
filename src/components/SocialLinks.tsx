import React from "react";
import { Linkedin, Github, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";

function SocialLinks() {
  return (
    <div className="my-6 flex items-center justify-center gap-4 ">
      <Link
        href="https://www.linkedin.com/in/yusuf-sheriffdeen-203199185/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rounded-full bg-stone-200 p-4 shadow-lg hover:bg-orange-600 dark:bg-stone-600">
          <Linkedin className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
      <Link
        href="https://github.com/sheriffdeen-yusuf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rounded-full bg-stone-200  p-4 shadow-lg hover:bg-orange-600 dark:bg-stone-600">
          <Github className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
      <Link
        href="https://wa.me/2349067773494"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rounded-full bg-stone-200  p-4 shadow-lg hover:bg-orange-600 dark:bg-stone-600">
          <MessageCircle className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
      <Link
        href="https://www.instagram.com/lekenz_y/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rounded-full bg-stone-200  p-4 shadow-lg hover:bg-orange-600 dark:bg-stone-600">
          <Instagram className="h-6 w-6 md:h-10 md:w-10" />
        </button>
      </Link>
    </div>
  );
}

export default SocialLinks;
