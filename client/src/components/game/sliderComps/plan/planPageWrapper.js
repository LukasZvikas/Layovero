import React from "react";
import { GameButton, GameInput, Heading, ImageBox } from "../../customComps";
import imageBoxTypes from "./imageBoxTypes";

const PlanPageWrapper = () => {
  const renderBoxes = arr => {
    return arr.map(item => (
      <ImageBox img={item.image} title={item.title} status={item.status} key={item.title} />
    ));
  };

  return (
    <div className="game-info__main-wrap">
      <Heading primaryText={"LET'S"} secondaryText={"PLAY A GAME"} />
      <div className="game-info__tertiary-heading">
        This is <span className="game-info__special-word">not just a game</span>.
        It will not simply entertain you, but
        <span className="game-info__special-word">
          {" "}
          it will educate you{" "}
        </span>{" "}
        and after you complete all of the rounds you will not only
        <span className="game-info__special-word">
          {" "}
          know more facts about our World
        </span>, but also
        <span style={{ fontWeight: "bold" }}>
          {" "}
          become one of the candidates for our amazing prize
        </span>{" "}
        that will be announced later!
      </div>
      <div class="game-info__image-box-wrap-main">
        {renderBoxes(imageBoxTypes)}
      </div>
      <GameButton name={"Rules"} classType={"game-info__btn-primary"} />
    </div>
  );
};

export default PlanPageWrapper;
