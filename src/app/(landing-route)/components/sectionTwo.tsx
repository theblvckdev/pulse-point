import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockArticlesData } from "@/data/mock-article-data";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionTwo = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto xl:px-0 md:px-5 px-3">
        <h5 className="text-sm text-gray-900">Read more</h5>
        <h2 className="md:text-4xl text-3xl md:leading-tight text-gray-900 ">
          Our Latest Articles
        </h2>

        <div className="mt-12">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {mockArticlesData.map((data, index) => {
              const { image, title } = data;

              return (
                <Card
                  className="bg-background shadow-none border-0 p-0"
                  key={index}
                >
                  <CardHeader className="space-y-0 p-0">
                    <div className="h-[250px] bg-gray-400 w-full overflow-hidden rounded-md">
                      <Image
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        width={500}
                        height={250}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="mt-3 p-0">
                    <CardTitle className="xl:text-xl text-lg font-normal capitalize">
                      {title}
                    </CardTitle>
                    <Link
                      className="mt-2 underline capitalize text-blue-500 flex items-center gap-2"
                      href={"/"}
                    >
                      <div>Read more</div>{" "}
                      <MoveRight size={25} strokeWidth={1} />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
