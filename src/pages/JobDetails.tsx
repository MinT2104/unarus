import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const JobDetails = () => {
  return (
    <DefaultLayout>
      <section className="h-full bg-primary relative overflow-auto scrollbar">
        <section className="relative top-[200px] w-4/5 mx-auto pb-20">
          <div className=" w-full h-full mx-auto bg-white rounded-[12px] border-[1px] p-4"></div>
        </section>
      </section>
    </DefaultLayout>
  );
};
