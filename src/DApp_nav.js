import './css/styles.css';
import fire from "./images/fire5.svg";
import Currency from "./images/currency.svg";
import Claim from "./images/claim-coin.svg";
import { Link, NavLink } from "react-router-dom";


export function DAppNav() {
    return (
      <div className="ConnectWallet card_dapp_nav">
        <h3>RugBot Platform</h3>
        <NavLink to="../dApp" activeClassName="btn-top-burn"><button className="btn btn--accent2 text--small text--medium btn-top-burn" ><img src={fire} className="burn-img" alt="fire svg" />Deposit</button></NavLink>
        <Link to="../claim"><button className="btn btn--accent2 text--small text--medium btn-top-burn" ><img src={Claim} className="burn-img" alt="fire svg" />Withdraw </button></Link>
        <p>This is where everything happens️</p>
        <p>1. Simply generate your new Solana wallet here on RugBot.</p>
        <p>2. Chose a trading risk level that will be taken by the bot (Higher risk = higher potential reward).</p>
        <p>3. Transfer your desired amount of $SOL to your new wallet address.</p>
        <p>4. Watch your amount of Solana go up.</p>
        <p>5. WITHDRAW your Solana back to your original wallet</p>
      </div>
    )
}