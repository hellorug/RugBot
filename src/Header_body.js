import React from "react";
import chevronRight from "./images/chevron-right.svg";
import coin from "./images/coin-rocket.png";
import {Link as LinkR} from 'react-scroll';
import Claim from "./images/claim-coin.svg";
import Typical from 'react-typical';
import {Link} from "react-router-dom";
var contractAddress = "0xBCb3b42D9A8Ec2EA47982418a3506231A6B67Af9";

class Header_body extends React.Component {
  render() {
    return (
      <div className="header_body">
        <div className="grid_choose grid-gap--small">
          <div className="value-proposition">
            <embed src={coin} className="token_logo"/>
            <h1 className="value-proposition__title">
              The New Meme Coin Rug Pull Tool
            </h1>
            <p className="value-proposition__text text text--small text--regular">
              Wish you got into <Typical className="typical"
                steps={['SHIB', 1500, 'DOGE', 1500, 'BTC', 1500, 'ETH', 1500, 'BNB', 1500, 'SOL', 1500, 'ADA', 1500, 'AVAX', 1500, 'MATIC', 1500, 'LINK', 1500]}
                loop={Infinity}
                wrapper="p"
              />early?</p><p> Well this is your chance! RugBot is here for you. It analyses new meme coins, buys them for you and sells them before everyone. This is the ultimate money making machine!
            </p>
            {/*<div className="badge-container-add">*/}
            {/*  <span className="badge-add badge--dark-add text--small">Contract Address:</span>*/}
            {/*  <span onClick={() => {navigator.clipboard.writeText(contractAddress)}} className="text text--small text--regular text--white badge-add2">*/}

            {/*  {contractAddress}*/}
            {/*  </span>*/}
            {/*  </div>*/}
              <div className="badge-container-hold">
              <span className="badge-hold badge--dark-hold text--small">Users:</span>
              <span className="text text--small text--regular text--white badge-hold2">
              367+
              </span>
              </div>
              <div className="badge-container-price">
              <span className="badge-hold badge--dark-hold text--small">Generated:</span>
              <span className="text text--small text--regular text--white badge-hold2">
              6,239+ SOL
              </span>
              </div>
            <Link to="dApp">
              <button className="value-proposition__button btn btn--flex btn--accent btn-buy" >
                <span className="text--standart text--medium text-bold">Start Earning $$$</span>
                <div className="chiron-icon-container">
                  <img src={chevronRight} alt="Right Icon" />
                </div>
              </button>
            </Link>
            {/*
            <button className="value-proposition__button btn btn--flex btn--accent2 btn-whitepaper">
              <span className="text--standart text--medium text-bold">WhitePaper</span>
              <div className="paper-icon-container">
                <img src={paper} alt="Paper Icon" />
              </div>
            </button>
            */}
            {/*
            <button className="value-proposition__button btn btn--flex btn--accent btn-whitepaper btn-free">
              <span className="text--standart text--medium">Free Tokens</span>
              <div className="paper-icon-container">
                <img src={Claim} alt="Claim Icon" />
              </div>
            </button>
          */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header_body;
