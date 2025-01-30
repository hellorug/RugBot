import React from "react";
import Rocket from "./images/rocket3.svg";
import Coins from "./images/coins.svg";
import Vote from "./images/vote.svg";

class Media_container extends React.Component {
  render() {
    return (
      <div className="media-container">
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Rocket" src={Rocket} />
            </div>
          </div>
          <div>
            <h2>TO THE MOON</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              Turn 1 SOL to over 50 SOL with just a few clicks on our risk-free platform.
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Coins" src={Coins} />
            </div>
          </div>
          <div>
            <h2>Multiply</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
            Watch how easily our bot will 5x... 10x... 100x your Solana by buying early and selling profitable meme coins in just a few days.
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Vote" src={Vote} />
            </div>
          </div>
          <div>
            <h2>Withdraw @ Any Time</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              Withdraw as much Solana as you want at a time... at anytime you want. Your assets are yours and yours only!
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media_container;
