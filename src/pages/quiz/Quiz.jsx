import React, { useState } from 'react';
import Question from '../../components/question/Question';
import './quiz.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const questions = [
    {
      id: 'q1',
      text: 'I won our first bowling match',
      choices: [
        { id: 'c1', text: 'True' },
        { id: 'c2', text: 'Flase' },
      ]
    },
    {
      id: 'q2',
      text: 'What is my favorite movie genre?',
      choices: [
        { id: 'c1', text: 'Action' },
        { id: 'c2', text: 'Horror' },
        { id: 'c3', text: 'Comedy' },
        { id: 'c4', text: 'Sci-fi' }
      ]
    },
    {
      id: 'q3',
      text: 'Which movie did we first watch together?',
      choices: [
        { id: 'c1', text: 'Cobweb' },
        { id: 'c2', text: 'Guardians of the Galaxy Vol. 3' },
        { id: 'c3', text: 'Insidious: The Red Door' },
        { id: 'c4', text: 'Evil Dead Rise' }
      ]
    },
    {
      id: 'q4',
      text: 'When did we become boyfriend and girlfriend?',
      choices: [
        { id: 'c1', text: 'September 5' },
        { id: 'c2', text: 'August 5' },
        { id: 'c3', text: 'August 15' },
        { id: 'c4', text: 'October 15' }
      ]
    },
    {
      id: 'q5',
      text: 'On our date after you became my girlfriend, where did we go?',
      choices: [
        { id: 'c1', text: 'Intramuros' },
        { id: 'c2', text: 'MOA' },
        { id: 'c3', text: 'Star City' },
        { id: 'c4', text: 'Rizal Park' }
      ]
    },
    {
      id: 'q6',
      text: 'When was our first date?', // May 2
      choices: []
    },
    {
      id: 'q7',
      text: 'What is the first(and only hahaha) dish that I cooked for you?', // Adobo
      choices: []
    },
    {
      id: 'q8',
      text: 'What game do we always play together?', // Farlight 84
      choices: []
    },
    {
      id: 'q9',
      text: 'who said I love you first? (type "me" or "you")', // Farlight 84
      choices: []
    },
    {
      id: 'q10',
      text: 'What was the name of our favorite coffee shop when we were still working at cafe24', // Farlight 84
      choices: []
    }
  ];

  const handleBegin = () => {
    setCurrentQuestionIndex(currentIndex => currentIndex + 1);
  };
  
  const handleBack = () => {
    setCurrentQuestionIndex(currentIndex => currentIndex - 1);
  };
  
  const handleQuestionAnswered = (input, index) => {
    setCurrentQuestionIndex(currentIndex => currentIndex + 1);
    // Update answers
    const ans = answers.slice();
    ans[index] = input;
    setAnswers(ans);
    if (currentQuestionIndex === questions.length - 1) {
      setScore(verifyAnswers(ans))
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }

  const verifyAnswers = (answers) => {
    let points = 0;
    answers[0] === 'c1' ? points++ : false
    answers[1] === 'c3' ? points++ : false
    answers[2] === 'c4' ? points++ : false
    answers[3] === 'c2' ? points++ : false
    answers[4] === 'c1' ? points++ : false
    answers[5].toLowerCase().includes('may') ? points++ : false
    answers[6].toLowerCase().includes('adobo') ? points++ : false
    answers[7].toLowerCase().includes('farlight') ? points++ : false
    answers[8].toLowerCase().includes('me') ? points++ : false
    answers[9].toLowerCase().includes('burr') ? points++ : false

    return points
  }

  return (
    <>
      <Helmet>
        <style>
          {
            'body { background-color: #212129;} body:before, body:after{content:none;}'
          }
        </style>
      </Helmet>
      <div className='zoom-100'>
        <h1>Zoom mo 100%</h1>
      </div>
      {
        currentQuestionIndex === -1 ?
        <div className="quiz-intro">
          <div className="quiz-container">
            <div className="quiz-header">
              <h1>Bago mo ma access yung letter, kailangan ko munang malaman kung ikaw yan</h1>
              <h1>Kailangan mong ma perfect 😉 </h1>
            </div>
            <div className="button-container">
              <button id="submit" onClick={handleBegin}>Next</button>
            </div>
          </div>
        </div>
        : 
        null
      }
      <div className="quiz-body">
        {questions.map((question, index) => {
          if (index === currentQuestionIndex) {
            return (
              <div className='question-form' key={question.id}>
                <Question
                  className='quiz-container'
                  questionId={question.id}
                  question={question.text}
                  choices={question.choices}
                  onAnswered={handleQuestionAnswered}
                  onBack={handleBack}
                  answer={answers[index]}
                  currentIndex={index}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      {
        currentQuestionIndex >= questions.length ?
        <div className="quiz-intro">
          <div className="quiz-container">
            <div className="quiz-header">
            { score === 10 ?
              <>
                <h1>Nice perfect! either ikaw nga talaga yan or chineck mo yung code para sa tamang sagot hahaha</h1>
                <h1>Either way, eto na yung link 😉</h1>
              </>
              : <>
                <h1>Naka {score} ka lang. Ulitin mo</h1>
              </>
            }
            </div>
            { score !== 10 ?
              <div className="button-container">
                <button id="submit" onClick={handleRetry}>Retry</button>
              </div>
              : <>
                <div className="button-container">
                  {/* <button id="submit" onClick={handleRetry}></button> */}
                  <Link className="message letter-link" to="/this-is-my-letter-09-05-23">
                    View my letter
                  </Link>
                </div>
              </>
            }
            
          </div>
        </div>
        : 
        null
      }
    </>
  );
}