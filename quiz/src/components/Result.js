import React from 'react'

function Result(props) {
  return (
    <>
    <div className='show-score'>
        <h3>Completed!</h3>
        <br />
        <h4>Total Score : {props.score}/{props.totalScore*20}</h4>
    </div>
    <button id='play-button' onClick={props.playAgain}>Play Again</button>
    </>

  )
}

export default Result
