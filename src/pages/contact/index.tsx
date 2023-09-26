import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import { Linkedin, Github, MessageCircle } from "lucide-react";
import Link from "next/link";

function index() {
  return (
    <AppLayout>
      <div className="h-screen p-20">
        <h1 className="text-5xl font-semibold text-orange-600">Contact me </h1>

        <div className="my-6 flex gap-4 ">
          <Link
            href="https://www.linkedin.com/in/yusuf-sheriffdeen-203199185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-stone-600 p-4 shadow-lg">
              <Linkedin className="h-6 w-6 md:h-10 md:w-10" />
            </button>
          </Link>
          <Link
            href="https://github.com/sheriffdeen-yusuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-stone-600 p-4 shadow-lg">
              <Github className="h-6 w-6 md:h-10 md:w-10" />
            </button>
          </Link>
          <Link
            href="https://wa.me/2349067773494"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-stone-600 p-4 shadow-lg">
              <MessageCircle className="h-6 w-6 md:h-10 md:w-10" />
            </button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}

export default index;
