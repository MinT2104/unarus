import React from "react";
import BNB from "../../assets/BNB.png";
import Arbitrum from "../../assets/Arbitrum.png";
import Celo from "../../assets/Celo.png";
import Ethereum from "../../assets/Ethereum.png";
import Optimism from "../../assets/Optimism.png";
import Polygon from "../../assets/Polygon.png";
import { useDispatch } from "react-redux";
import { setCurrencyPicked } from "../../redux/slices/currencyPicked";

export const CurrencyPopup = () => {
  const dataCurrency: any = [
    {
      logo: Ethereum,
      currency: "TestNet",
    },
    {
      logo: Polygon,
      currency: "MainNet",
    },
    // {
    //   logo: Celo,
    //   currency: "Celo",
    // },
    // {
    //   logo: BNB,
    //   currency: "BNB Chain",
    // },
    // {
    //   logo: Arbitrum,
    //   currency: "Arbitrum",
    // },
    // {
    //   logo: Optimism,
    //   currency: "Optimism",
    // },
  ];

  const dispatch = useDispatch();

  return (
    <section className="animate-opacity absolute w-[256px] h-fit currencyShadow bg-white top-10 right-0 rounded-[10px]">
      <ul className="flex flex-col gap-1 p-2">
        {dataCurrency.map((data: any) => (
          <li
            key={data.currency}
            onClick={() => {
              console.log(data);
              dispatch(
                setCurrencyPicked({ logo: data.logo, currency: data.currency })
              );
            }}
            className="p-[8px] flex gap-4 hover:bg-[#eef1f9] rounded-[10px]"
          >
            <img
              className="w-[20px] h-[20px]"
              src={data.logo}
              alt={data.currency}
            />
            <span>{data.currency}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
