import React from 'react';
import { Redirect } from 'react-router-dom';
import { questions } from './data/Questions.js';

import './HomeQuiz.css'

const HomeQuiz = ( {currentQuestion, answerHandler, showCharacter }) => {
  return(
    <div className='app'>
    <div className='part-two'>
          {currentQuestion < 4 && <div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].options.map((option) => (
							<button className='questions' onClick={() => {answerHandler(option.Morty, option.Rick, option.Jerry, option.Summer);}}>{option.optionText}</button>
						))}
					</div> </div> }
          {currentQuestion === 4 && <Redirect to='/Results'/>}
				</div>
        </div>

  )
}

export default HomeQuiz;
