import React from 'react'

function Score(props) {

  console.log(props.student); 

  return (
    <div>
        <p>Date: {props.student.date}</p>
        <p>Score: {props.student.score}</p>
    </div>
  )
}

export default Score