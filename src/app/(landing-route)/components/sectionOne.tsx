import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockServiceData } from "@/data/mock-service-data";
import React from "react";

const SectionOne = () => {
  return (
    <>
      <section className="py-24 bg-blue-50 bg-opacity-60">
        <div className="max-w-6xl mx-auto xl:px-0 md:px-5 px-3">
          <h5 className="text-sm text-gray-900">Your consultant</h5>
          <h2 className="md:text-4xl text-3xl md:leading-tight text-gray-900 ">
            Your Guide to Good Health
          </h2>

          <div className="mt-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              {mockServiceData.map((data, index) => {
                const { content, title } = data;

                return (
                  <Card
                    className="bg-white shadow-none border-0 pt-8 px-2 pb-2 rounded-md"
                    key={index}
                  >
                    <CardHeader className="space-y-0 py-0">
                      <h4 className="text-lg font-light text-blue-500">
                        0{index + 1}
                      </h4>
                      <CardTitle className="xl:text-xl text-lg font-normal capitalize">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-3">
                      <p className="xl:text-sm lg:text-xs text-sm text-gray-400">
                        {content}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
