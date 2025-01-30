import React from "react";

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap">
        <div className="roadmap-header">
        <h2>How does RugBot work?</h2>
        <p className="text text--standart text--regular ">
          Let’s take a look at how RugBot will allow you to multiply your SOL.
        </p>
        </div>
        <div className="road-body">
        <div className="card card--secondary card-red">
          <div className="card__header">
            <h3>AI Technology</h3>
          </div>
          <ul>
            <li>AI trained bot</li>
            <li>Trained by watching professional traders</li>
            <li>Rugs newly added meme coins</li>
            <li>Early buy and sells when token takes value before anyone!</li>
          </ul>
        </div>
        <div className="card card--white card-yellow">
          <div className="card__header">
            <h3>Free to use</h3>
          </div>
          <ul>
            <li>Free to use</li>
            <li>RugBot takes 1.5% of the profits ONLY</li>
              <li>You won't feel a thing :)</li>
              <li>Active Community</li>
          </ul>
        </div>
        <div className="card card--white card-green">
          <div className="card__header">
            <h3>Profitability</h3>
          </div>
          <ul>
            <li>3 risk options</li>
            <li>1.5x - 10x your SOL</li>
            <li>Easy withdraw to your personal wallet</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
