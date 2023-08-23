import React, { LegacyRef, useRef, useState } from "react";
import LG from "../../assets/LG.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useDispatch, useSelector } from "react-redux";
import { setPopupWallet } from "../../redux/slices/walletConnectionSlice";
import { Link } from "react-router-dom";
import { CurrencyPopup } from "../currencyPopup/CurrencyPopup";
import { RootState } from "../../store";
import { useClickOutside } from "../../hooks/useClickOutSide";
import loggedAvt from "../../assets/LoggedAvt.png";
import { MoreNav } from "../moreNavigate/MoreNav";

export const Navbar = () => {
  const dispatch = useDispatch();
  const [isPopupCurrency, setIsPopupCurrency] = useState<boolean>(false);
  const [isPopupMore, setIsPopupMore] = useState<boolean>(false);

  const dropDownRef = useRef<any>(null);
  const moreRef = useRef<any>(null);

  const Page: any = [
    {
      to: "/",
      logo: LG,
    },
    {
      to: "/jobs",
      name: "Jobs",
    },
    {
      to: "/workings",
      name: "Working",
    },
    {
      to: "/projects",
      name: "Projects",
    },
  ];
  const currencyData = useSelector(
    (state: RootState) => state.save.currencyPicked
  );

  const handleSetIsPopup = () => {
    setIsPopupCurrency(!isPopupCurrency);
  };
  useClickOutside(dropDownRef, setIsPopupCurrency);
  useClickOutside(moreRef, setIsPopupMore);

  const userData = useSelector((state: RootState) => state.save.user);
  console.log(userData);

  // const nav = document.getElementsByTagName("nav");
  // // window.onscroll = () => {
  // nav[0].classList.add("bg-white");
  // console.log(nav);
  // // };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between">
      <div className="w-1/3 px-[15px] py-[17px] ">
        <ul className="flex gap-[20px] items-center text-[16px]">
          {Page.map((data: any) => {
            if (data.logo) {
              return (
                <li key={data.to}>
                  <Link to={data.to}>
                    <img className="w-[43px] h-auto" src={data.logo} alt="" />
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  key={data.to}
                  className={`${
                    data.to === window.location.pathname
                      ? "font-[600] text-selected"
                      : "font-[400] text-noSelected"
                  }`}
                >
                  <Link to={data?.to}>
                    <span className="">{data.name}</span>
                  </Link>
                </li>
              );
            }
          })}
          <li
            ref={moreRef}
            onClick={() => setIsPopupMore(!isPopupMore)}
            className="cursor-pointer relative"
          >
            <span className="text-[#5D6785] font-[400]">
              <MoreHorizIcon />
            </span>
            {isPopupMore && <MoreNav />}
          </li>
        </ul>
      </div>
      <div className="w-1/3 px-[15px] py-[17px] h-full flex justify-center items-center">
        <div className="rounded-[12px] w-full h-fit flex items-center bg-white px-2 border-[1px] border-[#D6DDE3]">
          <SearchRoundedIcon sx={{ fontSize: 20 }} className="text-slate-400" />
          <input
            className="h-[40px] w-full outline-none p-[10px]"
            placeholder="Search tokens and NFT collections"
          />
        </div>
      </div>
      <div className="w-1/3 flex justify-end h-fit px-[15px] py-[17px]">
        <ul className="flex gap-[10px] items-center">
          <li
            ref={dropDownRef}
            onClick={handleSetIsPopup}
            className="relative flex items-center gap-[10px] p-2 py-1 rounded-[19px] hover:bg-slate-200 cursor-pointer"
          >
            <img src={`..${currencyData.logo}`} className="w-5 h-5" />
            <span>{currencyData.currency}</span>
            <ExpandMoreIcon />
            {isPopupCurrency && <CurrencyPopup />}
          </li>
          {!userData?.isLogged ? (
            <li>
              <button
                onClick={() => dispatch(setPopupWallet(true))}
                type="button"
                className="bg-[#FFD4EB] text-[#30A1EB] p-[10px] rounded-[20px] font-[600] outline-none"
              >
                Connect
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => dispatch(setPopupWallet(true))}
                type="button"
                className="w-[180px] bg-white flex items-center gap-2  hover:border-slate-300 border-[1px] border-white text-black p-[10px] py-[5px] rounded-[20px] font-[600] outline-none"
              >
                <img src={loggedAvt} className="w-6 h-6" alt="user imgage" />
                <span className="truncate">{userData.data?.address}</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
