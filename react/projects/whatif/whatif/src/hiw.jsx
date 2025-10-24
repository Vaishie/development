import React from "react";
import "./hiw.css";

export default function Hiw() {
  return (
    <div className="howItWorks-container">
      <h2 className="howItWorks-title">How It Works</h2>

      <div className="steps-row">
        <div className="step">
          <div className="icon-container icon1">
            <img src="/icon1.png" alt="Step 1" />
          </div>
          <div className="step-text-bold">Choose Your Life Settings</div>
        </div>

        <img className="arrow" src="/arrow.png" alt="arrow" />

        <div className="step">
          <div className="icon-container icon2">
            <img src="/icon2.png" alt="Step 2" />
          </div>
          <div className="step-text-bold">We Pull Real-World Data</div>
        </div>

        <img className="arrow" src="/arrow.png" alt="arrow" />

        <div className="step">
          <div className="icon-container icon3">
            <img src="/icon3.png" alt="Step 3" />
          </div>
          <div className="step-text-bold">Generate Your Simulation</div>
        </div>

        <img className="arrow" src="/arrow.png" alt="arrow" />

        <div className="step">
          <div className="icon-container icon4">
            <img src="/icon4.png" alt="Step 4" />
          </div>
          <div className="step-text-bold">Visualize Your New Lifestyle</div>
        </div>
      </div>
      <div className="button-container">
        <button className="howItWorks-button">See How It Works</button>
      </div>
    </div>
  );
}
