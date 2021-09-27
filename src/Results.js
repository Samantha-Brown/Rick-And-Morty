import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Results.css'

const Results = ( { character, setShowQuiz, clearState, setShowCharacter} ) => {
  return(
    <div className='score-section'>
    					Your cat is
    					<br/>
    					<p className='character'>{character}</p>
              <Link to='/'><button className='return' onClick={() => setShowQuiz(false)} onClick={clearState}>Take Quiz Again!</button></Link>
    				</div>
  )
}

export default Results;
