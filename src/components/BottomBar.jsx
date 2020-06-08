import React from "react";

const BottomBar = (props) => {
  const { toggleModal } = props;
  return (
    <div className="bottom-bar">
      <div className="signup-banner">
        <div className="signup-banner-text">
          <p>PREVIEW OF SPOTIFY</p>
          <p>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button>SIGN UP FREE</button>
      </div>
      <div className="music-controls">
        <div className="control-buttons">
          <div className="control-button-wrapper">
            <i onClick={toggleModal} class="fa fa-random"></i>
          </div>
          <div className="control-button-wrapper">
            <i onClick={toggleModal} class="fa fa-step-backward"></i>
          </div>
          <div className="control-button-wrapper">
            <i onClick={toggleModal} class="fa fa-play-circle"></i>
          </div>
          <div className="control-button-wrapper">
            <i onClick={toggleModal} class="fa fa-step-forward"></i>
          </div>
          <div className="control-button-wrapper">
            <i onClick={toggleModal} class="fa fa-redo"></i>
          </div>
        </div>
        <div className="progress-bar">
          <p onClick={toggleModal}>0.00</p>
          <hr onClick={toggleModal}></hr>
          <p onClick={toggleModal}>0.00</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
