import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import WBTC from "../../assets/WBTC.png";
import Ethereum from "../../assets/Ethereum.png";
import ARB from "../../assets/ARB.png";
import DAI from "../../assets/DAI.png";
import USDC from "../../assets/USDC.png";
import USDT from "../../assets/USDT.png";
import WETH from "../../assets/WETH.png";
import { useDispatch } from "react-redux";
import { setIsPopupSelectToken } from "../../redux/slices/selectTokenSlice";

export const SelectToken = () => {
  const dispatch = useDispatch();
  const dataToken: any = [
    {
      logo: Ethereum,
      name: "ETH",
    },
    {
      logo: ARB,
      name: "ARB",
    },
    {
      logo: DAI,
      name: "DAI",
    },
    {
      logo: USDC,
      name: "USDC",
    },
    {
      logo: USDT,
      name: "USDT",
    },
    {
      logo: WETH,
      name: "WETH",
    },
    {
      logo: WBTC,
      name: "WBTC",
    },
  ];
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center ">
        <div
          onClick={() => dispatch(setIsPopupSelectToken(false))}
          className=" w-full h-screen absolute top-0 bg-slate-900 opacity-70 z-50"
        />
        <div className="animate-opacityV2 bg-white h-4/5 w-[450px] rounded-[12px] flex flex-col z-50">
          <div className="flex flex-col gap-4  p-4">
            <span className="font-[500] text-[16px] w-full block">
              Select a token
            </span>
            <div className="w-full flex items-center px-2 rounded-[12px] border-[1px] border-searchStroke bg-searchBar">
              <SearchRoundedIcon className="text-slate-400" />
              <input
                className="px-3 p-2 bg-transparent outline-none w-full"
                placeholder="Search name or paste address"
                type="search"
                alt=""
              />
            </div>
            <div className="w-full flex flex-wrap gap-2">
              {dataToken.map((data: any) => (
                <button className="p-2 flex gap-2 border-[1px] rounded-[12px] hover:border-slate-500">
                  <img src={data.logo} className="w-[24px]" alt="" />
                  <span>{data?.name}</span>
                </button>
              ))}
            </div>
          </div>
          <hr />
          <div></div>
        </div>
      </section>
    </>
  );
};
