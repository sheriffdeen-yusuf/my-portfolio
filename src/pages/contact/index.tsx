import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import SocialLinks from "@/components/SocialLinks";
import { MapPin, MailCheck, GraduationCap, Phone } from "lucide-react";

function index() {
  return (
    <AppLayout>
      <div className=" h-screen px-10 py-10">
        <main className=" md:mx-auto md:w-[600px] ">
          <h1 className="my-4 text-center text-3xl font-semibold uppercase md:text-5xl ">
            Contact <span className="text-orange-600"> me </span>
          </h1>
          <div className="flex flex-col justify-center space-y-3">
            <div className="flex w-full items-center justify-between  ">
              <h1>
                <MapPin className="mr-2 inline-block" /> Location
              </h1>
              <h1>Kaduna, Nigeria</h1>
            </div>
            <div className="flex w-full items-center justify-between  ">
              <h1>
                <MailCheck className="mr-2 inline-block" /> Email
              </h1>
              <h1>sheriffdeenyusuf1130@gmail.com</h1>
            </div>
            <div className="flex w-full items-center justify-between  ">
              <h1>
                <GraduationCap className="mr-2 inline-block" /> Alumni
              </h1>
              <h1>Ahmadu Bello University, Zaria</h1>
            </div>
            <div className="flex w-full items-center justify-between  ">
              <h1>
                <MapPin className="mr-2 inline-block" /> Mobile
              </h1>
              <h1>09067773494</h1>
            </div>
          </div>
          {/* social links */}
          <SocialLinks />
        </main>
      </div>
    </AppLayout>
  );
}

export default index;
