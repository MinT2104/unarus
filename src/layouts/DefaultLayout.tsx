import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { WalletConnection } from "../components/walletConnection/WalletConnection";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { LoggedWallet } from "../components/walletConnection/LoggedWallet";
import { SelectToken } from "../components/selectToken/SelectToken";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const isConnectedWallet = useSelector(
    (state: RootState) => state.walletConnect.isPopup
  );
  const userData = useSelector((state: RootState) => state.save.user);
  const isSelectToken = useSelector(
    (state: RootState) => state.selectToken.isPopup
  );
  return (
    <section className="scrollbar overflow-hidden relative h-screen">
      <div className="absolute"></div>
      <Navbar />
      {isConnectedWallet && !userData?.isLogged ? <WalletConnection /> : null}
      {isConnectedWallet && userData?.isLogged ? <LoggedWallet /> : null}
      {isSelectToken ? <SelectToken /> : null}
      {children}
    </section>
  );
};
