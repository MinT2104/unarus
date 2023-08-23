import React, { useState } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setPopupWallet } from "../redux/slices/walletConnectionSlice";
import BNB from "../assets/BNB.png";
import { setIsPopupSelectToken } from "../redux/slices/selectTokenSlice";
import { JobType } from "../types/JobType";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export const Swap = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState({
    checked1: true,
    checked2: false,
    checked3: false,
  });
  const isConnectedWallet = useSelector(
    (state: RootState) => state.walletConnect.isPopup
  );
  const currencyData = useSelector(
    (state: RootState) => state.save.currencyPicked
  );
  console.log(currencyData.currency.replace("/src", ".."));

  const userData = useSelector((state: RootState) => state.save.user);
  const testData: JobType[] = [
    {
      id: 1234,
      name: "FrontEnd Developer",
      discription:
        "lorem isjdisdisdsdsiisindsndinsidnsindisndinsidsidnmsdsdlorem isjdisdisdsdsiisindsndinsidnsindisndinsidsidnmsdsd",
      money: 1000,
      project: "abc",
      status: "done",
    },
    {
      id: 5678,
      name: "FrontEnd Developer",
      discription: "lorem isjdisdisdsdsiisindsndinsidnsindisndinsidsidnmsdsd",
      money: 1000,
      project: "abc",
      status: "done",
    },
    {
      id: 4123,
      name: "FrontEnd Developer",
      discription: "lorem isjdisdisdsdsiisindsndinsidnsindisndinsidsidnmsdsd",
      money: 1000,
      project: "abc",
      status: "done",
    },
    {
      id: 12412,
      name: "FrontEnd Developer",
      discription: "lorem isjdisdisdsdsiisindsndinsidnsindisndinsidsidnmsdsd",
      money: 1000,
      project: "abc",
      status: "done",
    },
    {
      id: 98812,
      name: "FrontEnd Developer",
      discription: "lorem isjdisdisdsdsiisindsndinsidnsindisndinsidsidnmsdsd",
      money: 1000,
      project: "abc",
      status: "done",
    },
  ];

  const handleSetChecked = (N: number) => {
    if (N === 1) {
      setChecked({
        checked1: true,
        checked2: false,
        checked3: false,
      });
    }
    if (N === 2) {
      setChecked({
        checked1: false,
        checked2: true,
        checked3: false,
      });
    }
    if (N === 3) {
      setChecked({
        checked1: false,
        checked2: false,
        checked3: true,
      });
    }
  };
  return (
    <DefaultLayout>
      <section className="h-full bg-primary relative overflow-auto scrollbar">
        {/* <div className="relative w-[465px] h-[348px] mx-auto top-[128px] bg-white text-[16px] rounded-[15px] border-[1px] p-2 flex flex-col gap-2">
          <div className="absolute cursor-pointer z-10 top-[144px] bg-white left-[217px] w-t border-[8px] border-white rounded-[8px]">
            <span className="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] bg-[#E8ECFB]">
              <ArrowDownwardOutlinedIcon
                sx={{
                  fontSize: 18,
                  color: "#98A1C0",
                }}
                className=""
              />
            </span>
          </div>
          <div className="flex items-center justify-between p-2 ">
            <ul className="text-[16px] flex gap-[10px]">
              <li className="text-firstColor">Swap</li>
              <li className="text-[#5D6785]">Buy</li>
            </ul>
            <div className="text-[#5D6785] bg-[#F5F6FC] p-1 px-2 w-fit rounded-[16px] flex gap-[8px] items-center">
              <span className="text-[12px]">0.30% slippage</span>
              <SettingsOutlinedIcon />
            </div>
          </div>
          <div className="p-[15px] py-[10px] rounded-[12px] w-full h-[100px] bg-[#F5F6FC] ">
            <div className="flex justify-between w-full">
              <div className="">
                <span className="text-[35px]">0</span>
              </div>
              <div>
                <li
                  onClick={() =>
                    dispatch(setIsPopupSelectToken({ isPopup: true }))
                  }
                  className="cursor-pointer flex items-center gap-[10px] rounded-[19px] p-1 px-2 font-[600] w-fit bg-[#E8ECFB]"
                >
                  <img src={"/src/assets/BNB.png"} className="w-5 h-5" />
                  <span className="text-[20px]">ETH</span>
                  <ExpandMoreIcon />
                </li>
              </div>
            </div>
            <div className="w-full justify-end flex">
              <span className="text-[16px] text-noSelected">
                Balance: {userData.data?.balance}
              </span>
            </div>
          </div>
          <div className="p-[15px] py-[10px] rounded-[12px] w-full h-[100px] bg-[#F5F6FC] flex justify-between">
            <div className="">
              <span className="text-[35px]">0</span>
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch(setIsPopupSelectToken({ isPopup: true }))
                }
                className="p-1 px-3 bg-[#30A1EB] font-[600] text-white rounded-[19px] flex items-center gap-1"
              >
                <span>Select token</span>
                <ExpandMoreIcon />
              </button>
            </div>
          </div>

          <button
            onClick={() => dispatch(setPopupWallet(!isConnectedWallet))}
            type="button"
            disabled={userData.isLogged}
            className={`${
              userData.isLogged
                ? "bg-[#F5F6FC] text-[#BBBFCF]"
                : "bg-[#FFE2F1] text-[#30A1EB]"
            } rounded-[19px]  h-[58px] font-[600] `}
          >
            {userData.isLogged ? "Select a token" : "Connect Wallet"}
          </button>
        </div> */}
        <div className=" relative top-[200px] ">
          <span className="text-center font-bold block text-[32px]">
            Unarus Jobs
          </span>
          <span className="text-center font-light block text-slate-400 w-1/3 mx-auto">
            Where you can find work quickly and efficiently through contracts to
            increase security and enhance your experience
          </span>
        </div>
        <section className="relative top-[250px] w-4/5 mx-auto pb-20">
          <div className=" w-full h-full mx-auto bg-white rounded-[12px] border-[1px] p-4">
            <div className="w-full h-20 flex items-center justify-between">
              <div className="rounded-[12px] border-[1px] truncate px-4">
                <SearchIcon className="text-noSelected" />
                <input
                  placeholder="Search name"
                  className="px-6 py-3 w-80 outline-none"
                  type="text"
                />
              </div>
              <div>
                <button className="px-6 py-3 bg-pink-500 text-white rounded-[12px]">
                  New
                </button>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-10 py-4">
              <span className=" text-sm text-noSelected">
                Display priority:{" "}
              </span>
              <div className="flex items-center gap-2">
                <input
                  onClick={() => handleSetChecked(1)}
                  checked={checked.checked1}
                  id="radio"
                  type="radio"
                />
                <span className=" text-sm font-[500]">Latest news</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  onClick={() => handleSetChecked(2)}
                  checked={checked.checked2}
                  id="radio"
                  type="radio"
                />
                <span className="text-sm font-[500]">
                  Urgent recruitment needed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  onClick={() => handleSetChecked(3)}
                  checked={checked.checked3}
                  id="radio"
                  type="radio"
                />
                <span className="text-sm font-[500]">Highest salary</span>
              </div>
            </div>
            <hr />
            <div className="w-full h-fit flex py-10">
              <div className="w-2/3 h-full p-4 flex flex-col gap-4">
                <div className="w-full h-fit rounded-[12px] bg-pink-50 p-4  flex gap-4  ">
                  <div className="bg-white p-4 h-fit w-fit rounded-[12px]  border-[1px]">
                    <img
                      className="w-20"
                      src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/22jH9BeCP11ZyskwUFOzuX8T26dkVn9i_1691544970____ab811d1aeff7dfc5fd2dc3c2fe61cedc.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <span className="inline-block w-fit font-bold hover:underline cursor-pointer">
                      PHP Developer Thu Nhập Đến 22 Triệu
                    </span>
                    <span className="inline-block w-fit font-light text-noSelected text-sm">
                      11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000
                    </span>
                    <span className="inline-block w-full font-light text-slate-500 py-4">
                      Updated 9 minutes ago
                    </span>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>Ho Chi Minh city</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>
                            <span className="font-bold">There are 19</span> days
                            left to apply
                          </span>
                        </span>
                      </div>
                      <button className="px-3 text-sm p-1 rounded-[6px] bg-pink-500 text-white">
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-fit rounded-[12px] bg-pink-50 p-4  flex gap-4  ">
                  <div className="bg-white p-4 h-fit w-fit rounded-[12px]  border-[1px]">
                    <img
                      className="w-20"
                      src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/22jH9BeCP11ZyskwUFOzuX8T26dkVn9i_1691544970____ab811d1aeff7dfc5fd2dc3c2fe61cedc.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <span className="inline-block w-fit font-bold hover:underline cursor-pointer">
                      PHP Developer Thu Nhập Đến 22 Triệu
                    </span>
                    <span className="inline-block w-fit font-light text-noSelected text-sm">
                      11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000
                    </span>
                    <span className="inline-block w-full font-light text-slate-500 py-4">
                      Updated 9 minutes ago
                    </span>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>Ho Chi Minh city</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>
                            <span className="font-bold">There are 19</span> days
                            left to apply
                          </span>
                        </span>
                      </div>
                      <button className="px-3 text-sm p-1 rounded-[6px] bg-pink-500 text-white">
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-fit rounded-[12px] bg-pink-50 p-4  flex gap-4  ">
                  <div className="bg-white p-4 h-fit w-fit rounded-[12px]  border-[1px]">
                    <img
                      className="w-20"
                      src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/22jH9BeCP11ZyskwUFOzuX8T26dkVn9i_1691544970____ab811d1aeff7dfc5fd2dc3c2fe61cedc.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <span className="inline-block w-fit font-bold hover:underline cursor-pointer">
                      PHP Developer Thu Nhập Đến 22 Triệu
                    </span>
                    <span className="inline-block w-fit font-light text-noSelected text-sm">
                      11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000
                    </span>
                    <span className="inline-block w-full font-light text-slate-500 py-4">
                      Updated 9 minutes ago
                    </span>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>Ho Chi Minh city</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>
                            <span className="font-bold">There are 19</span> days
                            left to apply
                          </span>
                        </span>
                      </div>
                      <button className="px-3 text-sm p-1 rounded-[6px] bg-pink-500 text-white">
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-fit rounded-[12px] bg-pink-50 p-4  flex gap-4  ">
                  <div className="bg-white p-4 h-fit w-fit rounded-[12px]  border-[1px]">
                    <img
                      className="w-20"
                      src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/22jH9BeCP11ZyskwUFOzuX8T26dkVn9i_1691544970____ab811d1aeff7dfc5fd2dc3c2fe61cedc.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <span className="inline-block w-fit font-bold hover:underline cursor-pointer">
                      PHP Developer Thu Nhập Đến 22 Triệu
                    </span>
                    <span className="inline-block w-fit font-light text-noSelected text-sm">
                      11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000
                    </span>
                    <span className="inline-block w-full font-light text-slate-500 py-4">
                      Updated 9 minutes ago
                    </span>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>Ho Chi Minh city</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>
                            <span className="font-bold">There are 19</span> days
                            left to apply
                          </span>
                        </span>
                      </div>
                      <button className="px-3 text-sm p-1 rounded-[6px] bg-pink-500 text-white">
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-fit rounded-[12px] bg-pink-50 p-4  flex gap-4  ">
                  <div className="bg-white p-4 h-fit w-fit rounded-[12px]  border-[1px]">
                    <img
                      className="w-20"
                      src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/22jH9BeCP11ZyskwUFOzuX8T26dkVn9i_1691544970____ab811d1aeff7dfc5fd2dc3c2fe61cedc.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <span className="inline-block w-fit font-bold hover:underline cursor-pointer">
                      PHP Developer Thu Nhập Đến 22 Triệu
                    </span>
                    <span className="inline-block w-fit font-light text-noSelected text-sm">
                      11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000
                    </span>
                    <span className="inline-block w-full font-light text-slate-500 py-4">
                      Updated 9 minutes ago
                    </span>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>Ho Chi Minh city</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FmdGoodIcon className="text-pink-500" />
                          <span>
                            <span className="font-bold">There are 19</span> days
                            left to apply
                          </span>
                        </span>
                      </div>
                      <button className="px-3 text-sm p-1 rounded-[6px] bg-pink-500 text-white">
                        Apply now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 h-full border-l">
                <div className="text-center font-bold">
                  You may be interested
                </div>
              </div>
            </div>
            {/* <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b-[1px] font-light text-[12px] text-noSelected">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Discription
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Money
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {testData?.map((data: JobType, index) => (
                  <tr
                    key={index}
                    className="even:bg-slate-100 transition duration-300 ease-in-out "
                  >
                    <td className="whitespace-nowrap px-6 py-6 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6 font-medium">
                      {data.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6 text-blue-600 underline max-w-[140px] truncate cursor-pointer">
                      {data.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6">
                      {data.project}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6 break-all max-w-[142px] truncate">
                      {data.discription}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6">
                      {data.money}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6">
                      {data.status}
                    </td>
                    <td className="whitespace-nowrap px-6 py-6">
                      <MoreHorizIcon className="bg-slate-300 rounded-full cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <div className="py-2 px-2">
              <span className="text-sm">Page 1 of 20</span>
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
};
