import Image from "next/image";
import React from "react";
import promoImage from "../assets/images/promo.png";

const SectionThree = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto xl:px-0 md:px-5 px-3">
        <div className="h-[400px] w-full rounded-2xl relative overflow-hidden">
          <Image
            src={promoImage}
            alt="promo image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
