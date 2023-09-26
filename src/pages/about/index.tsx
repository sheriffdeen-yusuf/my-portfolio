import AppLayout from "@/components/layouts/AppLayout";
import React from "react";

function index() {
  return (
    <AppLayout>
      <div className="h-screen px-20 py-20">
        <h1 className="text-5xl font-semibold text-orange-600">About me</h1>
        <p className="text-lg">
          As a skilled front-end engineer with a software engineering
          background, I bring a unique combination of creativity, technical
          expertise, and strategic thinking to every project. My strengths lie
          in my ability to seamlessly integrate front-end design with back-end
          functionality, creating intuitive and high-performing user
          experiences. I am experienced in a wide range of programming languages
          and frameworks, and I am adept at collaborating with cross-functional
          teams to deliver projects on time and within budget. With a keen eye
          for detail, a passion for clean and responsive design, and a
          commitment to user-centered design principles, I am dedicated to
          delivering innovative solutions that meet and exceed expectations.
        </p>
      </div>
    </AppLayout>
  );
}

export default index;
