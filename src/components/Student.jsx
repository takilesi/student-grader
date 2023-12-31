import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    
      <div className = "stud">
          <h2>Student: {props.student.name}</h2>
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