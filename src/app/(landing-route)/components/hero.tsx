import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroComponent = () => {
  return (
    <>
      <section className="h-screen pt-5">
        <div className="max-w-6xl mx-auto lg:px-0 md:px-5 px-3 flex lg:flex-row flex-col lg:items-center justify-center lg:justify-normal h-full gap-4">
          <div className="lg:basis-2/3">
            <h5 className="text-sm text-gray-900">Our Platform</h5>
            <h1 className="md:text-5xl text-4xl text-gray-900 font-medium">
              Instant Symptom Check at your Fingertips
            </h1>

            <p className="text-base max-w-lg text-gray-500 mt-5">
              Get accurate symptom assessments and actionable steps for care,
              all in one easy-to-use platform.
            </p>

            <div className="mt-5">
              <Button variant={"primary"} size={"lg"}>
                Start Assessment
              </Button>
            </div>
          </div>
          <div className="basis-1/2 md:block hidden h-[450px] rounded-lg overflow-hidden">
            <Image
              src={"/images/hero-image.jpg"}
              className="w-full h-full object-cover"
              alt="Pulse point hero image"
              width={600}
              height={450}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
