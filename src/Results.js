import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Results.css'

const Results = ( { character, findImage, clearState, setShowCharacter} ) => {
  useEffect(() => {
    setShowCharacter(true)
  })
  return(
    <div className='score-section'>
    {setShowCharacter &&
      <div className='app' style={{borderRadius:'7px', backgroundPosition: '50%', backgroundBlendMode:'normal', backgroundImage: `url(${findImage()})`}}></div>}
    					Your cat is
    					<br/>
    					<p className='character'>{character}</p>
              <Link to='/'><button className='return' onClick={clearState}>Take Quiz Again!</button></Link>
    				</div>
  )
}

export default Results;
