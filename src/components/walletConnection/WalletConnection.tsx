import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import UniswapWallet from "../../assets/UniswapWallet.png";
import CoinbaseWallet from "../../assets/CoinbaseWallet.png";
import Metamask from "../../assets/Metamask.png";
import WalletConnect from "../../assets/WalletConnect.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setPopupWallet } from "../../redux/slices/walletConnectionSlice";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MetaMaskSDK from "@metamask/sdk";
import { setUserLogin } from "../../redux/slices/userLoginSlice";

import ConnectMeteorUtils from "../../utils/ConnectMeteorUtils";

interface dataConnectionTypes {
  img: string;
  name: string;
}

export const WalletConnection = () => {
  const dataConnection: dataConnectionTypes[] = [
    // {
    //   img: UniswapWallet,
    //   name: "Uniswap Wallet",
    // },
    {
      img: Metamask,
      name: "Meteor Wallet",
    },
    // {
    //   img: WalletConnect,
    //   name: "WalletConnect",
    // },
    // {
    //   img: CoinbaseWallet,
    //   name: "Coinbase Wallet",
    // },
  ];
  // const initial = async () => {};
  // initial();

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.save.user);
  const handleConnect = async (data: dataConnectionTypes) => {
    ConnectMeteorUtils(data);
  };
  // const getData = (address: string) => {
  //   // Requesting balance method
  //   window.ethereum
  //     .request({
  //       method: "eth_getBalance",
  //       params: [address, "latest"],
  //     })
  //     .then((balance: any) => {
  //       dispatch(
  //         setUserLogin({
  //           isLogged: true,
  //           data: {
  //             ...userData.data,
  //             balance: ethers.formatEther(balance),
  //             address,
  //           },
  //         })
  //       );
  //     });
  //   dispatch(setPopupWallet(false));
  // };
  // useEffect(() => {
  //   dispatch(
  //     setUserLogin({
  //       isLogged: false,
  //       data: {
  //         balance: "",
  //         address: "",
  //       },
  //     })
  //   );
  // }, []);
  // const accountChangeHandler = (account: string) => {
  //   getbalance(account);
  //   dispatch(
  //     setUserLogin({
  //       ...userData,
  //       data: {
  //         ...userData.data,
  //         address: account,
  //       },
  //     })
  //   );
  // };

  console.log(userData);
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
      <section className="animate-slideInToLeft w-[390px] h-full absolute top-0 right-0 z-50 p-[10px]">
        <div className=" bg-white rounded-[12px] border-[1px] w-full h-full p-5 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="font-[600]">Connect a wallet</span>
            <div className="text-[#5D6785] bg-[#F5F6FC] p-1 w-fit rounded-[10px] cursor-pointer flex gap-[8px] items-center">
              <SettingsOutlinedIcon />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col rounded-[10px] truncate gap-[2px]">
            {dataConnection.map((data: dataConnectionTypes, index) => (
              <div
                onClick={() => handleConnect(data)}
                key={index}
                className="hover:bg-[#EBEFFF] cursor-pointer w-full h-[76px] bg-barSwap flex text-[16px] font-[700] items-center gap-4 px-4"
              >
                <img
                  src={data.img}
                  className="w-[40px] h-[40px] border-[1px] border-backSwap rounded-[12px]"
                  alt={data.name}
                />
                <span className="text-black">{data.name}</span>
              </div>
            ))}
          </div>
          <span className="text-[12px] text-[#7780A0] font-[400] leading-4 tracking-tight">
            By connecting a wallet, you agree to Uniswap Labs’
            <span className="mx-1 font-bold cursor-pointer">
              Terms of Service
            </span>
            and consent to its
            <span className="mx-1 font-bold cursor-pointer">
              Privacy Policy
            </span>
            . (Last Updated 6.7.23)
          </span>
        </div>
      </section>
    </>
  );
};
