import React, { useState } from "react";
import  "./App.css";
import { data } from "./data";

const Game = props => {
  const { home, guest } = props;

  return (
    <article className={'banner'}>
      <div className={'banner-container'} id="banner">
        <img src={home.logo} alt="Логотип хозяев" />
        <p>
          {home.points} — {guest.points}
        </p>
        <img src={guest.logo} alt="Логотип гостей" />
      </div>
    </article>
  );
};

const Controls = React.memo(({ onClick }) => {
  return (
    <div className={'controls'}>
      <button id="next" onClick={onClick}>
        Next
      </button>
    </div>
  );
});

function App() {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const currentGame = data[currentGameIndex];
  const handleClick = () => {
    if (currentGameIndex >= data.length - 1) {
      setCurrentGameIndex(0);
    } else {
      setCurrentGameIndex(currentGameIndex + 1);
    }
  };
  const handleClick1 = () => {
    setCurrentGameIndex(
      currentGameIndex >= data.length - 1 ? 0 : currentGameIndex + 1
    );
  };
  const handleClick2 = () => {
    setCurrentGameIndex(cI => (cI >= data.length - 1 ? 0 : cI + 1));
  };

  return (
    <div className={'container'}>
      <main className={'main-content'}>
          <Controls onClick={handleClick2} />
          <Game home={currentGame.home} guest={currentGame.guest} />
      </main>
    </div>
  );
}

export default App;
