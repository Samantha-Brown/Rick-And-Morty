import React, { useEffect, useState } from 'react';
import { questions } from './data/Questions.js';
import { fetchData } from './apiCalls';
import { Route, Link } from 'react-router-dom';
import Results from './Results';
import HomeQuiz from './HomeQuiz';
import { getCharacterInfo } from './util';
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

	//const [showQuiz, setShowQuiz] = useState(false);
	const [showCharacter, setShowCharacter] = useState(false);
  const [banner, setBanner] = useState('')
  const [characterInfo, setCharacterInfo] = useState([])

  useEffect(() => {
    fetchData()
    .then(data => getCharacterInfo(data))
    .then(data => setCharacterInfo(data))
    //.then(data => changeBackground(characterInfo))
  }, []);
  //console.log('HELLO', characterInfo)

	//Sorting function
	const answerHandler = (morty, rick, jerry, summer) => {
    		setMorty(totalMorty + morty);
    		setRick(totalRick + rick);
    		setJerry(totalJerry + jerry);
    		setSummer(totalSummer + summer);

		switch(Math.max(totalMorty, totalRick, totalJerry, totalSummer)) {
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
		if (nextQuestion < questions.length + 1) {
			setCurrentQuestion(nextQuestion);
		}
	};

  const findImage = () => {
		const winningCharacter = characterInfo.find((object) => {
    return object.name.includes(character)
  })
	return winningCharacter.image
}
	const changeBackground = (name) => {
		if (name === 'Morty Smith' && showCharacter===true) {
			setBanner(findImage());}
		if (name === 'Rick Sanchez' && showCharacter===true) {
			setBanner(findImage());}
		if (name === 'Jerry Smith' && showCharacter===true) {
			setBanner(findImage());}
		if (name === 'Summer Smith' && showCharacter===true) {
			setBanner(findImage());}
	};
	//Always check which character has most points in order to reveal the respective banner
//^^^^^This isn't working....why???

  const clearState = () => {
    setCurrentQuestion(0);
    setMorty(0);
    setRick(0);
    setJerry(0);
    setSummer(0);
    setCharacter('Beth');
    //setShowQuiz(false);
    setShowCharacter(false);
    setBanner('');
  }
return (
  <main>
  <header className='main-title'>Which Rick & Morty Character is Your Cat?</header>
    <Route exact path='/'>
    <div className='intro-part'>
    					<div className='intro-text'>
    						You might think you know your cat well but do you really? Take this quiz to find out which character your cat could replace on the TV show Rick & Morty!
    					</div>
    					<Link to={'/HomeQuiz'}> <button className='start-button button-loader'>Start</button></Link>
    				</div>
    </Route>
    <Route exact path='/HomeQuiz'>
    <HomeQuiz currentQuestion={currentQuestion} answerHandler={answerHandler} showCharacter={showCharacter}/>
    </Route>
    <Route exact path='/Results'>
    <Results character={character} findImage={findImage} clearState={clearState} setShowCharacter={setShowCharacter}/>
    </Route>
  </main>
)}
