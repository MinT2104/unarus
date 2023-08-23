import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const VoteDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <DefaultLayout>
      <div className="bg-primary w-full h-full scrollbar flex justify-center pt-32 overflow-auto pb-10">
        <div className="w-[800px] rounded-[12px] flex flex-col gap-4 p-6 bg-white border-[1px] border-searchStroke h-fit">
          <div className="flex gap-4">
            <span onClick={() => navigate(-1)} className="cursor-pointer">
              <ArrowBackOutlinedIcon className="" />
            </span>
            <div className="flex justify-between items-center w-full font-[700] text-[20px] text-center">
              <span className="font-[600]">All Proposals</span>
              <span className="px-2 p-1 rounded-[10px] uppercase text-[14px] text-green-600 border-green-600 border-[1px]">
                Executed
              </span>
            </div>
          </div>
          <span className="block w-full text-2xl font-bold">
            Deploy Uniswap V3 on Linea
          </span>
          <span className="block w-full text-sm font-light text-noSelected">
            Voting ended August 2, 2023 at 11:21 PM GMT+7
          </span>
          <div className="flex gap-2">
            <div className="w-1/2 bg-slate-200 rounded-[12px] h-fit p-4 flex gap-2 flex-col">
              <div className="font-[500] flex justify-between">
                <span>For</span>
                <span>51,836,954 / 40,000,000</span>
              </div>
              <div className="w-full h-1 bg-green-400 rounded-full" />
            </div>
            <div className="w-1/2 bg-slate-200 rounded-[12px] h-fit p-4 flex gap-2 flex-col">
              <div className="font-[500] flex justify-between">
                <span>Against</span>
                <span>132</span>
              </div>
              <div className="w-full h-1 bg-slate-300 rounded-full" />
            </div>
          </div>
          <span className="block w-full text-xl font-bold">Details</span>
          <span className="block w-full text-xl font-bold">Description</span>
          <span className="block w-full text-xl font-bold">Proposer</span>
        </div>
      </div>
    </DefaultLayout>
  );
};
