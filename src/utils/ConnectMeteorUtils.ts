import {
  InjectedWallet,
  Network,
  NetworkId,
  Wallet,
  WalletModuleFactory,
  setupWalletSelector,
} from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import meteorIconUrl from "@near-wallet-selector/meteor-wallet/assets/meteor-icon.png";

const ConnectMeteorUtils = async (data: any) => {
  // const meteorWallet = setupMeteorWallet({
  //   iconUrl: "https://yourdomain.com/yourwallet-icon.png", //optional
  // });
  const selector = await setupWalletSelector({
    network: "testnet",
    modules: [setupMeteorWallet()],
  });

  const modal = setupModal(selector, {
    contractId: "test.testnet",
  });

  modal.show();
  if (data.name === "Meteor Wallet") {
    // if (window.ethereum) {
    //   // res[0] for fetching a first wallet
    //   window.ethereum
    //     .request({ method: "near" })
    //     .then((res: any) => getData(res[0]));
    // } else {
    //   alert("install metamask extension!!");
    // }
    const wallet = await selector.wallet("my-near-wallet");
    const accounts = await wallet.signIn({
      contractId: "thangdev2104.testnet",
    });
    // const accounts = await window.dapp.request("ethereum", {
    //   method: "dapp:accounts",
    // });
  }
};
export default ConnectMeteorUtils;
