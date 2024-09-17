import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeroImage from "../assets/images/hero-image.jpg";

const HeroComponent = () => {
  return (
    <>
      <section className="lg:h-screen lg:py-0 py-[6rem] pb-[4rem] lg:pt-5">
        <div className="max-w-6xl mx-auto xl:px-0 md:px-5 px-3 flex lg:flex-row flex-col lg:items-center justify-center lg:justify-normal h-full xl:gap-9 lg:gap-0 gap-6">
          <div className="lg:basis-2/3">
            <h5 className="text-sm text-gray-900">Our Platform</h5>
            <h1 className="md:text-5xl text-4xl md:leading-tight text-gray-900 ">
              Instant Symptom Check at Your Fingertips
            </h1>

            <p className="text-base md:max-w-lg w-full text-gray-500 mt-5">
              Get accurate symptom assessments and actionable steps for care,
              all in one easy-to-use platform.
            </p>

            <div className="mt-5">
              <Button variant={"primary"} size={"lg"}>
                Start Assessment
              </Button>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="lg:h-[450px] bg-gray-100 md:h-[400px] h-[250px] rounded-lg overflow-hidden">
              <Image
                src={HeroImage}
                className="w-full h-full object-cover"
                alt="Pulse point hero image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
