import React, { useState, useRef } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import MainWindow from "./components/MainWindow";
import SideBar from "./components/SideBar";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Genres from "./components/pages/Genres";
import Signup from "./components/pages/Signup";
import PlaylistView from "./components/pages/PlaylistView";
import SignupModal from "./components/SignupModal";
import GenreView from "./components/pages/CategoryView";

function App() {
  const [modalOpen, setModal] = useState(false);
  const modal = useRef(null);

  const handleModalClick = (e) => {
    if (modal.current.contains(e.target)) {
      return;
    }
    setModal(false);
  };

  const toggleModal = () => {
    setModal(!modalOpen);
  };

  return (
    <div className="outer-wrap">
      <div className="grid-container">
        <SideBar toggleModal={toggleModal} />
        <TopBar />

        <Switch>
          <Route path="/genres/:id" component={GenreView} />
          <Route path="/genres" component={Genres} />
          <Route path="/playlists/:id" component={PlaylistView} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={MainWindow} />
        </Switch>

        <BottomBar toggleModal={toggleModal} />
        {modalOpen && (
          <SignupModal
            toggleModal={toggleModal}
            modal={modal}
            handleModalClick={handleModalClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
