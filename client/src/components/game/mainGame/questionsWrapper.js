import React, { createContext } from "react";
import { Heading, GameButton } from "../customComps";
import QuestionsRenderer from "./questionsRenderer";
import QuestionCount from "./questionCount";
import {
  renderQuestions,
  renderButtonType,
  getQuestTitle,
  getCountNumber
} from "./functions";
import { GameContext } from "./mainGameProvider";

const QuestionWrapper = props => {
  const showExplanation = (answered, explanation) => {
    return answered ? explanation : null;
  };
  return (
    <GameContext.Consumer>
      {({ functions, props, state, checkIfAnswered, actions }) => {
        return (
          <div className="game-info">
            <QuestionCount />
            <div className="game-info__main-wrap">
              <Heading
                primaryText={
                  getQuestTitle({
                    questions: props.game.questions,
                    questCount: props.game.questCount
                  }).primary
                }
                secondaryText={
                  getQuestTitle({
                    questions: props.game.questions,
                    questCount: props.game.questCount
                  }).special
                }
                tertiaryText={"?"}
              />
              <QuestionsRenderer />
              <div className="game-info__explanation">
                {showExplanation(
                  state.answered,
                  props.game.questions[props.game.questCount].explanation
                )}
              </div>
              {renderButtonType({
                state,
                props,
                actions
              })}
            </div>
          </div>
        );
      }}
    </GameContext.Consumer>
  );
};
export default QuestionWrapper;