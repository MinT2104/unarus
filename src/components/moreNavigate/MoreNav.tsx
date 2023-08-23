import React from "react";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { Link } from "react-router-dom";

export const MoreNav = () => {
  return (
    <section className="absolute top-14 rounded-[12px] w-[250px] p-4 h-fit bg-white border-[1px] currencyShadow flex flex-col gap-2">
      <Link
        to="/vote"
        className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded-[12px]"
      >
        <BallotOutlinedIcon />
        <span>Vote in governance</span>
      </Link>
      <div className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded-[12px]">
        <OutlinedFlagIcon />
        <span>Report</span>
      </div>
      <hr />
      <div className="flex items-center text-noSelected gap-2 hover:bg-slate-100 p-2 rounded-[12px] text-[14px]">
        <span>Help center </span>
        <ArrowOutwardOutlinedIcon />
      </div>
      <div className="flex items-center text-noSelected gap-2 hover:bg-slate-100 p-2 rounded-[12px] text-[14px]">
        <span>Documentation</span>
        <ArrowOutwardOutlinedIcon />
      </div>
      <div className="flex items-center text-noSelected gap-2 hover:bg-slate-100 p-2 rounded-[12px] text-[14px]">
        <span>Feedback</span>
        <ArrowOutwardOutlinedIcon />
      </div>
      <div className="flex items-center text-noSelected gap-2 hover:bg-slate-100 p-2 rounded-[12px] text-[14px]">
        <span>Legal & Privacy</span>
        <ArrowOutwardOutlinedIcon />
      </div>
    </section>
  );
};
