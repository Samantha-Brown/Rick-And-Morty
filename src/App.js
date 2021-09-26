import React, { useEffect, useState } from 'react';
import { questions } from './data/Questions.js';
// import { fetchData } from './apiCalls';
import { Route, Link } from 'react-router-dom';
// import Error from './Error';



export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	// Total score per character setters
	const [totalMorty, setMorty] = useState(0);
	const [totalRick, setRick] = useState(0);
	const [totalJerry, setJerry] = useState(0);
	const [totalSummer, setSummer] = useState(0);

	//Final result setter
	const [character, setCharacter] = useState("Beth");

	const [showQuiz, setShowQuiz] = useState(false);
	const [showCharacter, setShowCharacter] = useState(false);

	//Sorting function
	const answerHandler = (morty, rick, jerry, summer) => {
    		setMorty(totalMorty + morty);
    		setRick(totalRick + rick);
    		setJerry(totalJerry + jerry);
    		setSummer(totalSummer + summer);

		switch (Math.max(totalMorty, totalRick, totalJerry, totalSummer)) {
    			case totalMorty: setCharacter("Morty")
    			 	break;
    			case totalRick: setCharacter("Rick")
    				break;
    			case totalJerry: setCharacter("Jerry")
    				break;
    			case totalSummer: setCharacter("Summer")
    				break;
    			default:
    				break;
    		};

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowCharacter(true);
		}
	};

	const [banner, setBanner] = useState('')
	const changeBackground = () => {
		if (character === 'Morty' && showCharacter===true) {
			setBanner(require("./assets/banners/Morty.jpeg"));}
		if (character === 'Rick' && showCharacter===true) {
			setBanner(require("./assets/banners/Rick.jpeg"));}
		if (character === 'Jerry' && showCharacter===true) {
			setBanner(require("./assets/banners/Jerry.jpeg"));}
		if (character === 'Summer' && showCharacter===true) {
			setBanner(require("./assets/banners/Summer.jpeg"));}
	};
	//Always check which character has most points in order to reveal the respective banner
	useEffect(() => {
		changeBackground()
	});

	return (
		<div>
		<div className='main-title'>Which Rick & Morty Character is Your Cat?</div>
		<div className='app' style={{borderRadius:'7px', backgroundPosition: '50%', backgroundBlendMode:'normal', backgroundImage: `url(${banner})`}}>
			{showQuiz ? (
			<div>
			{showCharacter ? (
				<div className='score-section'>
					Your cat is
					<br/>
					<p className='character'>{character}</p>
          <button className='return' onClick={() => setShowQuiz(true)}>Take Quiz Again!</button>
				</div>

			) : (
				<>
				<div className='part-two'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].options.map((option) => (
							<button onClick={() => {answerHandler(option.morty, option.rick, option.jerry, option.summer);}}>{option.optionText}</button>
						))}
					</div>
				</div>

				</>
			)} </div>
		) : (
		<>
				<div className='intro-part'>
					<div className='intro-text'>
						You might think you know your cat well but do you really? Take this quiz to find out which character your cat could replace on the TV show Rick & Morty!
					</div>
					<button className='start-button button-loader' onClick={() => setShowQuiz(true)}>Start</button>
				</div>
		</>
		)}
		</div>
		</div>
	);
}
