import React, { useState, useEffect } from 'react';
import './question.css';

export default function Question(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = props.question || 'Question text';
  const choices = props.choices;

  useEffect(() => {
    if (props.answer) {
      setSelectedAnswer(props.answer);
    }
  }, [props.answer]);

  const handleAnswerSelected = (choiceId) => {
    setSelectedAnswer(choiceId);
  };

  const handleNextButtonClick = () => {
    console.log(selectedAnswer)
    if (selectedAnswer !== null) {
      props.onAnswered(selectedAnswer, props.currentIndex);
    } else {
      alert('Please select an answer.');
    }
  };

  const handlePrevButtonClick = () => {
    props.onBack();
  };

  return (
    <div className="quiz-container" key={props.questionId}>
      <div className="quiz-header">
        <h1 id={props.questionId}>{question}</h1>
        <div className="quiz-body" key={props.questionId}>
          {choices.length ? (
            <ul key={props.questionId}>
              {choices.map(choice => (
                <li key={choice.id}>
                  <input
                    type="radio"
                    name="answer"
                    id={choice.id}
                    className="answer"
                    checked={selectedAnswer === choice.id}
                    onChange={() => handleAnswerSelected(choice.id)}
                  />
                  <label htmlFor={choice.id}>{choice.text}</label>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <input
                name="answer"
                id={choices.id}
                className="direct-answer"
                value={selectedAnswer || ''}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="button-container">
        <button id="submit" onClick={handlePrevButtonClick} className='previous'>Previous</button>
        <button id="submit" onClick={handleNextButtonClick} className='next'>Next</button>
      </div>
    </div>
  );
}