import React from "react";
import Logo from "./images/RUGBOT-logo.png";
import Tiktok from "./images/tiktok.svg";
import Telegram from "./images/telegram.svg";
import Swap from "./images/swap-white.svg";
import {Link as LinkR} from 'react-scroll';
import { Link } from "react-router-dom";

class Header_top extends React.Component {
  render() {
    return (
      <div className="header_top">
        <div className="logo">
          <embed src={Logo} alt="ECAT brand logo" />
          <span className="logo-topleft">RugBot</span>
        </div>
        <nav className="header-nav">
          <ul className="list list--inline">
          <LinkR to="features" spy={true} smooth={true}><li className="list__item text text--small text--regular">
              HowTo
            </li></LinkR>
            <LinkR to="features" spy={true} smooth={true}><li className="list__item text text--small text--regular">
              Features
            </li></LinkR>
          </ul>
          <a href="https://www.tiktok.com/@rugclub.ai" target="_blank" rel="noopener noreferrer">
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://www.tiktok.com/@rugclub.ai">
          <img className ="discord" alt="Tiktok" src={Tiktok}></img>
          </button></form></a>
          <a href="https://t.me/+PppdKGpObPZmMWIx" target="_blank" rel="noopener noreferrer">
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://t.me/+PppdKGpObPZmMWIx">
          <img className ="discord" alt="Telegram" src={Telegram}></img>
          </button>
          </form></a>

          <span className="vertical-line" />
          <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
            <Link to="dApp"><button className="btn btn--accent2 text--small text--medium btn-top-app">
              App
            </button></Link>
          </a>
          <form>
          <button className="btn btn--link text text--small text--medium"  formaction="https://www.tiktok.com/@rugclub.ai">
          <img className ="discord2" alt="Tiktok" src={Tiktok}></img>
          </button>
          </form>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://t.me/+PppdKGpObPZmMWIx">
          <img className ="discord2" alt="Telegram" src={Telegram}></img>
          </button>
          </form>
        </nav>
      </div>
      
    );
  }
}
function dapp() {
  return <h2>dapp</h2>;
}
export default Header_top;
