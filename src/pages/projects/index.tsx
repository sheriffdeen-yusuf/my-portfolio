import AppLayout from "@/components/layouts/AppLayout";
import Image from "next/image";
import React from "react";

function Index() {
  return (
    <AppLayout>
      <div className="grid-col-1 grid gap-8 px-20 py-10 md:grid-cols-2">
        {/* 1 project */}
        <div className=" max-w-md  overflow-hidden rounded-xl bg-white shadow-lg dark:bg-stone-700">
          <Image
            className="h-48 w-full object-cover"
            src="/foodlify.png"
            alt="Work Image"
            width={300}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Foodlify Admin</div>
            <p className="text-base text-gray-700 dark:text-stone-300">
              Foodlify admin dashbord Elevating Culinary Management...
            </p>
          </div>
          <div className="px-6 py-4">
            <a
              href="http://44.217.38.143/"
              className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
            >
              View Details
            </a>
          </div>
        </div>
        {/* p 2 */}
        <div className=" max-w-md  overflow-hidden rounded-xl bg-white shadow-lg dark:bg-stone-700">
          <Image
            className="h-48 w-full object-cover"
            src="/movie.png"
            alt="Work Image"
            width={300}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Movie DB</div>
            <p className="text-base text-gray-700 dark:text-stone-300">
              StreamHub is your go-to online movie app, offering an extensive
              and ever-expanding collection of movies and TV shows. With a
              user-friendly interface and seamless streaming experience,
              it&apos;s the perfect entertainment companion for film enthusiasts
              of all ages.
            </p>
          </div>
          <div className="px-6 py-4">
            <a
              href="https://main--euphonious-heliotrope-5fe638.netlify.app/"
              className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
            >
              View Details
            </a>
          </div>
        </div>
        {/* p 3 */}
        <div className="max-w-md overflow-hidden  rounded-xl bg-white shadow-lg dark:bg-stone-700">
          <Image
            className="h-48 w-full object-cover"
            src="/dnd.png"
            alt="Work Image"
            width={300}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Draggzie</div>
            <p className="text-base text-gray-700 dark:text-stone-300">
              Responsive image gallery with login, drag-and-drop, search. Built
              with React/Next.js. Easy and elegant!
            </p>
          </div>
          <div className="px-6 py-4">
            <a
              href="https://playful-rolypoly-f83119.netlify.app/"
              className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
            >
              View Details
            </a>
          </div>
        </div>
        {/* p 4 */}
        <div className="max-w-md overflow-hidden  rounded-xl bg-white shadow-lg dark:bg-stone-700">
          <Image
            className="h-48 w-full object-cover"
            src="/hng.png"
            alt="Work Image"
            width={300}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">profile card</div>
            <p className="text-base text-gray-700 dark:text-stone-300">
              hngx frontend intership program, task 1
            </p>
          </div>
          <div className="px-6 py-4">
            <a
              href="https://meek-gumption-e15c88.netlify.app/"
              className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Index;
