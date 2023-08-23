import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Link, useNavigate } from "react-router-dom";

export const Vote = () => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <div className="bg-primary w-full h-full flex justify-center pt-32 overflow-auto pb-10">
        <div className="w-[600px] h-fit flex flex-col gap-4">
          <span className="text-3xl font-[600] text-center w-full block">
            Unarus Governance
          </span>
          <p className="block text-center w-full text-slate-500">
            Unarus tokens represent voting shares in Unarus governance. You can
            vote on each proposal yourself or delegate your votes to a third
            party.
          </p>
          <div className="mt-10 flex w-full justify-between items-center">
            <span className="font-[500] text-[24px]">Proposals</span>
            <button className="px-4 p-2 rounded-[12px] bg-pink-400 text-white">
              <Link to="/vote/create-proposal">Create Proposal</Link>
            </button>
          </div>
          <section className="mt-5 flex flex-col gap-4">
            <div
              onClick={() => navigate("/vote/detail/123456789")}
              className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200"
            >
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
            <div className="w-full flex gap-4 items-center rounded-[12px] cursor-pointer px-[16px] py-[12px] bg-slate-200">
              <span className="text-noSelected">2.42</span>
              <span className="block w-full font-[600]">
                Deploy Uniswap V3 on Linea
              </span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
};
