import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div className = "stud">
        <p>Student: {props.student.name}</p>
        <p id="smText">Bio: {props.student.bio}</p>

            {props.student.scores.map((current, i)=>{
            return (
            <Score key={i} student={current}/>
            )
            },[])}
        
    </div>
  )
}

export default Student