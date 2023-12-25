import React, { useState } from 'react';
import questions from '../questions';
import QuizComplete from '../assets/quiz-complete.png';

export default function Quiz() {
  const [ans, setAns] = useState([]);
  const ind = ans.length;

  const handleAnswer = (selectedAnswer) => {
    setAns((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  };

  const shuffleAnswers = (answers) => {
    const shuffled = [...answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <>
      {ind === questions.length - 1 ? (
        <div id='summary'>
          <img src={QuizComplete} alt='Quiz Complete' />
          <h2>Quiz Completed!</h2>
        </div>
      ) : (
        <div id='quiz'>
          <div id='question'>
            <h2>{questions[ind].text}</h2>
            <ul id='answers'>
              {shuffleAnswers(questions[ind].answers).map((eachAns) => (
                <li key={eachAns} className='answer'>
                  <button onClick={() => handleAnswer(eachAns)}>
                    {eachAns}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
