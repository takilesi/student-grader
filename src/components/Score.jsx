import React from 'react'

function Score(props) {

  console.log(props.student); 

  return (
    <div className = "score">
        <p>Date: {props.student.date}</p>
        <p id="scoreSpacing">Score: &nbsp; &nbsp;<b>{props.student.score}</b></p>
    </div>
  )
}

export default Score