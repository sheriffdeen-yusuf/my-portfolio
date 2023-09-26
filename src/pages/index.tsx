import TypingText from "@/components/TypingText";
import AppLayout from "@/components/layouts/AppLayout";
import Image from "next/image";
import { SendHorizontal } from "lucide-react";
import React from "react";
import Link from "next/link";

function Index() {
  return (
    <AppLayout>
      <main className="h-full p-14 text-black dark:text-white">
        <div className="md:b-4 grid grid-cols-1 items-center justify-center gap-12 pb-40 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold">
              Hi, i am Sheriffdeen <TypingText />
            </h1>
            <p className="mt-8 text-lg font-medium">
              Experienced Frontend Developer with 1+ year of expertise in
              creating engaging and user-friendly web applications. Proficient
              in turning design ideas into responsive, visually precise
              interfaces. Committed to crafting smooth user journeys and keeping
              abreast of the latest technologies for innovative solutions.
              Adaptable and enthusiastic about continuous learning to enhance
              skills.
            </p>
            <Link
              href="https://wa.me/2349067773494"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-6 inline-block rounded-md bg-orange-600 px-8 py-4 text-lg font-normal md:w-[15rem]">
                Hire Me <SendHorizontal className="inline-block" />{" "}
              </button>
            </Link>
          </div>
          <div>
            <Image
              src="/me.png"
              height={550}
              width={550}
              alt="me.png"
              className=" mt-8 rounded-full bg-orange-500 p-4"
            />
          </div>
        </div>
      </main>
    </AppLayout>
  );
}

export default Index;
