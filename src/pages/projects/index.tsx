import AppLayout from "@/components/layouts/AppLayout";

import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: `The Wild Oasis`,
    desc: `An advanced hotel management system that provides a comprehensive dashboard for efficient hotel operations, including room bookings, guest check-ins, and check-outs, enhancing the guest experience and simplifying staff management`,
    image: "/oasis.png",
    link: "https://lekenz-the-wild-oasis.netlify.app/",
  },
  {
    title: `World wise`,
    desc: `Explore the globe and keep a digital travel diary with our web app. Easily mark and share the places you've visited worldwide, creating a personalized map of your adventures.`,
    image: "/worldwise.png",
    link: "https://lekenz-worldwise.netlify.app/",
  },
  {
    title: `Pizzas Online`,
    desc: `Order mouthwatering pizzas online, with a variety of toppings and
    easy customization. Enjoy freshly baked goodness delivered to your
    door!`,
    image: "/pizza.png",
    link: "https://lekenz-fast-react-pizza.netlify.app/",
  },
  {
    title: `Movie DB`,
    desc: `StreamHub is your go-to online movie app, offering an extensive
    and ever-expanding collection of movies and TV shows. With a
    user-friendly interface and seamless streaming experience,
    it&apos;s the perfect entertainment companion for film enthusiasts
    of all ages.`,
    image: "/movie.png",
    link: "https://lekenz-movie-db.netlify.app/",
  },
  {
    title: `Draggzie`,
    desc: `  Responsive image gallery with login, drag-and-drop, search. Built
    with React/Next.js. Easy and elegant!`,
    image: "/dnd.png",
    link: "https://playful-rolypoly-f83119.netlify.app/",
  },
  {
    title: `profile card`,
    desc: `   hngx frontend intership program, task 1`,
    image: "/hng.png",
    link: "https://meek-gumption-e15c88.netlify.app/",
  },
];

function Index() {
  return (
    <AppLayout>
      <div className="grid-col-1 mb-24 grid  gap-8 px-10 py-10 md:grid-cols-2 md:px-20">
        {projects.map(({ title, desc, image, link }, idx) => (
          <ProjectCard
            key={idx}
            title={title}
            desc={desc}
            image={image}
            link={link}
          />
        ))}
      </div>
    </AppLayout>
  );
}

export default Index;
