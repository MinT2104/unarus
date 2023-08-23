import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <section className="w-full h-fit bg-primary">
        <div className="h-screen w-[500px] mx-auto flex flex-col items-center justify-center gap-4">
          <h1 className="font-black text-[40px] text-pink-600 ">
            Unarus Protocol
          </h1>
          <h3 className="font-light text-sm text-noSelected">
            The platform offers reliable contracts
          </h3>
          <button
            onClick={() => navigate("/jobs")}
            className="font-bold text-lg text-white px-6 py-3 bg-pink-400 rounded-full"
          >
            Get started
          </button>
        </div>
      </section>
    </DefaultLayout>
  );
};
