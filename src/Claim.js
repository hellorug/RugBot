import './css/styles.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import Claim from "./images/claim-coin.svg";
import {ClipboardCopy} from "lucide-react";
import {Refresh} from "@mui/icons-material";
import {useState} from "react";

export function ConnectMeta() {
    const { activateBrowserWallet, deactivate, account } = useEthers()

    function handleSend() {
        return
    }

    const [solAmount, setSolAmount] = useState("0.00 SOL");

    return (
      <div className="ConnectWallet card_dapp">
          <p className='text title'>Withdraw Your $SOL</p>

          {/*<div>*/}
        {/*  <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => activateBrowserWallet()}>Connect</button><span className="vertical-line" />*/}
        {/*  <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => deactivate()}>Disconnect</button>*/}
        {/*</div>*/}

          <p></p>
          <p style={{fontSize:'small'}}><em>Paste your original wallet to claim back your Solana!</em></p>
          <input
              type="text"
              className="input-box"
          />
          <br/>
          <br/>
          <input
              type="text"
              value={solAmount}
              readOnly
              className="small-input-box"
          />

          <button
              className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Max
          </button>

          <br/>
          <br/>

        <button className="btn btn--accent2 text--small text--medium btn-top-burn btn-dapp-use" disabled><img src={Claim} className="burn-img" alt="fire svg" />Claim</button>
          <p style={{fontSize:'small'}}><em>You need Solana in your wallet to be able to withdraw</em></p>

      </div>
    )
}