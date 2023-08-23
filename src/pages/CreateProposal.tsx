import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Ethereum from "../assets/Ethereum.png";
import { useDispatch } from "react-redux";
import { setIsPopupSelectToken } from "../redux/slices/selectTokenSlice";

export const CreateProposal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <DefaultLayout>
      <div className="bg-primary w-full h-full scrollbar flex justify-center pt-32 overflow-auto pb-10">
        <div className="w-[800px] rounded-[12px] flex flex-col gap-4 p-6 bg-white border-[1px] border-searchStroke h-fit">
          <div className="flex gap-4 justify-start">
            <span
              onClick={() => navigate(-1)}
              className="w-1/3 block cursor-pointer"
            >
              <ArrowBackOutlinedIcon className="" />
            </span>
            <span className="block w-1/3 font-[700] text-[20px] text-center">
              Create Proposal
            </span>
            <span className="block w-1/3" />
          </div>
          <div className="w-full bg-pink-200 h-fit rounded-[12px] p-4">
            <p className="text-pink-600">
              <span className="font-bold">Tip:</span> Select an action and
              describe your proposal for the community. The proposal cannot be
              modified after submission, so please verify all information before
              submitting. The voting period will begin immediately and last for
              7 days. To propose a custom action, read the docs.
            </p>
          </div>
          <div className="w-full bg-slate-200 h-fit rounded-[12px] p-4 flex flex-col gap-2">
            <span className="text-noSelected block w-full">
              Proposed Action
            </span>
            <button className="w-full flex justify-between items-center hover:bg-slate-300 rounded-[12px] p-4">
              <span className="font-[600]">Transfer Token</span>
              <ExpandMoreOutlinedIcon />
            </button>
          </div>
          <div className="w-full bg-slate-200 h-fit rounded-[12px] p-4 flex flex-col gap-2">
            <span className="text-noSelected block w-full">To</span>
            <input
              className="w-full p-4 py-2 bg-transparent outline-none"
              placeholder="Wallet address or ENS name"
              type="text"
              alt=""
            />
          </div>
          <div className="w-full bg-slate-200 h-fit rounded-[12px] p-4 flex gap-2 items-center justify-between">
            <input
              className=" p-4 text-[24px] py-2 bg-transparent outline-none"
              placeholder="0"
              type="text"
              alt=""
            />
            <button
              onClick={() => dispatch(setIsPopupSelectToken({ isPopup: true }))}
              className="flex  gap-2 p-2 rounded-[12px] bg-slate-300"
            >
              <img className="w-[24px]" src={Ethereum} alt="" />
              <span>Ethereum</span>
              <ExpandMoreOutlinedIcon />
            </button>
          </div>
          <div className="w-full bg-slate-200 h-fit rounded-[12px] p-4 flex flex-col gap-2">
            <span className="text-noSelected block w-full">Proposal</span>
            <input
              className=" p-4 text-[24px] py-2 bg-transparent outline-none"
              placeholder="Proposal title"
              type="text"
              alt=""
            />
            <div className="w-full border-[0.5px] border-slate-300" />
            <textarea
              className="w-full h-80 p-4 py-2 bg-transparent outline-none resize-none"
              placeholder="Summary"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full rounded-[20px] p-4 text-center bg-pink-400 text-noSelected"
          >
            You must have 2,500,000 votes to submit a proposal
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};
