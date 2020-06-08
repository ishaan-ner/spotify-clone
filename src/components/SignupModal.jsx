import React from "react";

const SignupModal = (props) => {
  const { toggleModal, modal, handleModalClick } = props;
  return (
    <div className="modal-bg" onClick={handleModalClick}>
      <div className="modal" ref={modal}>
        <div>
          <h1>Start listening with a free Spotify account</h1>
          <ul>
            <li>No credit card, ever</li>
            <li>Get unlimited podcasts</li>
            <li>Play your favourite music, with ads</li>
          </ul>
          <span className="close-modal" onClick={toggleModal}>
            CLOSE
          </span>
        </div>
        <div>
          <button>sign up free</button>
          <hr />
          <p>Already have an account?</p>
          <button>log in</button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
