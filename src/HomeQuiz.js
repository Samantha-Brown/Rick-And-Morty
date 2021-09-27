import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { questions } from './data/Questions.js';

import './HomeQuiz.css'

const HomeQuiz = ( {currentQuestion, answerHandler }) => {
  return(
    <div className='part-two'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].options.map((option) => (
							<button onClick={() => {answerHandler(option.Morty, option.Rick, option.Jerry, option.Summer);}}>{option.optionText}</button>
						))}
					</div>
				</div>

  )
}

export default HomeQuiz;
