import React from "react";
import background6 from "./images/background-item-6.svg";
import background7 from "./images/background-item-7.svg";


class Features extends React.Component {
  render() {
    return (
      <section className="features">
        <h1>
          RugBot Features
        </h1>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">Ultimate Meme Coin Rug Tool</h2>
            <p className="banner__text text text--small text--regular text--muted">
              Stay tuned for upcoming updates and releases of the bot. Our developers worked very hard to provide you with a free to use tool so please share it and show them some love.
            </p>
            <div className="road-body features-card">
            <div className="card card--secondary card--white">
          <div className="card__header">
            <h3> Booming Market </h3>
          </div>
          <h2>$3.56 Trillion</h2>
        </div>

        <div className="card card--white card--white">
          <div className="card__header">
            <h3>Success Rate</h3>
          </div>
          <h2>97.2%</h2>
        </div>
                <div className="card card--secondary card--white">
                    <div className="card__header">
                        <h3> Current Market </h3>
                    </div>
                    <h2>Bullish</h2>
                </div>
        <div className="card card--white card--white">
          <div className="card__header">
            <h3>RugBot Status</h3>
          </div>
          <h2>Active</h2>
        </div>
                <div className="card card--white card--white">
                    <div className="card__header">
                        <h3>Dev Team Level</h3>
                    </div>
                    <h2>Experienced</h2>
                </div>
        </div>
          </div>
        </div>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">Rewards for Community</h2>
            <p className="banner__text text text--small text--regular text--muted">
              RugBot offers rewards for its Community through it's telegram channel so make sure to join it ASAP. Frequent Airdrops to random winners + proof on Telegram.
            </p>
            <form>
            <button className="btn btn--accent2 text--small text--medium btn-page-app" formaction="https://t.me/RugBot">
              Telegram
          </button>
          </form>
          </div>
        </div>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">
              Join the Team
            </h2>
            <p className="banner__text text text--small text--regular text--muted">
              RugBot is still expanding and we have plans to hit the Ethereum Market next. Are you a WEB 3.0 developer? Come join us developing the next generation of RugBot.
            </p>
          </div>
        </div>
        {/*<div className="grid_choose">*/}
        {/*  <div className="banner--left">*/}
        {/*    <h2 className="banner__title">*/}
        {/*      Hold and Earn*/}
        {/*    </h2>*/}
        {/*    <p className="banner__text text text--small text--regular text--muted">*/}
        {/*    Holding certain amounts of ECAT during a Snapshot guarantees you airdrops of NFTs, Future Tokens, etc.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <img
          className="background-item-6"
          src={background6}
          alt="Background item 6"
        />
        <img
          className="background-item-7"
          src={background7}
          alt="Background item 7"
        />
      </section>
    );
  }
}

export default Features;
