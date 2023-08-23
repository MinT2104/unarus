import React, { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import WalletIcon from "@mui/icons-material/Wallet";
import { useDispatch, useSelector } from "react-redux";
import { setPopupWallet } from "../../redux/slices/walletConnectionSlice";
import loggedAvt from "../../assets/LoggedAvt.png";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
import { setUserLogin } from "../../redux/slices/userLoginSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const LoggedWallet = () => {
  const dispatch = useDispatch();
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const userData = useSelector((state: RootState) => state.save.user);

  const handleLogout = () => {
    dispatch(
      setUserLogin({
        isLogged: false,
        data: {
          balance: "",
          address: "",
        },
      })
    );
    dispatch(setPopupWallet(false));
  };

  return (
    <>
      <div
        onClick={() => dispatch(setPopupWallet(false))}
        className="animate-slideInToLeft absolute w-[390px] top-0 right-16 h-full hover:right-12 z-50 duration-500
       py-[10px] cursor-pointer"
      >
        <div className="absolute top-6 left-5">
          <KeyboardDoubleArrowRightIcon
            className="text-slate-500"
            sx={{ fontSize: 30 }}
          />
        </div>
        <div className=" z-50 duration-500 hover:bg-slate-300 opacity-30 h-full rounded-[12px]" />
      </div>

      <section className=" w-[390px] h-full absolute top-0 right-0 truncate z-50 p-[10px]">
        {isSetting && (
          <div className=" bg-white rounded-[12px] border-[1px] w-full h-full p-5 z-50 flex flex-col gap-4 ">
            <ArrowBackIcon
              onClick={() => setIsSetting(false)}
              className="cursor-pointer absolute"
            />
            <span className="w-full block text-center font-[500]">
              Settings
            </span>
            <span className="block w-full text-left text-[20px] font-[500] text-slate-500">
              Preferences
            </span>
          </div>
        )}
        <div className=" animate-slideInToLeft bg-white rounded-[12px] border-[1px] w-full h-full p-5 flex flex-col gap-4">
          <div className="w-full h-fit flex justify-between">
            <div className="w-fit h-fit flex items-center">
              <img src={loggedAvt} className="w-10 h-10" alt="userAvt" />
              <span className="w-[140px] cursor-pointer py-[5px] px-[10px] truncate">
                {userData.data?.address}
              </span>
            </div>
            <div className="flex w-fit gap-2">
              <div
                onClick={() => setIsSetting(true)}
                className="cursor-pointer text-black bg-[#F5F6FC] p-1 px-2 w-fit rounded-[12px] flex gap-[8px] items-center"
              >
                <SettingsOutlinedIcon />
              </div>
              <div
                onClick={handleLogout}
                className="cursor-pointer text-black bg-[#F5F6FC] p-1 px-2 w-fit rounded-[12px] flex gap-[8px] items-center"
              >
                <LogoutIcon />
              </div>
            </div>
          </div>
          <div>
            <span className="font-[500] text-[36px]">
              ${userData.data.balance}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => dispatch(setPopupWallet(false))}
              className="p-2 bg-[#eef1f9] w-full rounded-[12px] font-[600]"
            >
              <span>View and sell NFTs</span>
            </button>
            <button className="justify-center p-2 bg-[#eef1f9] w-full rounded-[12px] font-[600] flex gap-4 items-center">
              <WalletIcon />
              <span>Buy crypto</span>
            </button>
          </div>
          <div className="pt-[20px]">
            <ul className="flex gap-5 items-center">
              <li className="font-[600] text-selected cursor-pointer">
                Tokens
              </li>
              <li className="text-noSelected cursor-pointer">NFTs</li>
              <li className="text-noSelected cursor-pointer">Pools</li>
              <li className="text-noSelected cursor-pointer">Activity</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
