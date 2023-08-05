import { useState } from 'react';
import './App.css';
import students from './models/students'
import Student from './components/Student';

function App() {

  // let { studentState, setStudentState } = useState({students:students})

  // console.log(students.map(({ name }) => name)); 
  // console.log(students.map(current, i)); 
  // const userNames = users.map(({ name }) => name)

  return (
    <div className="App">
      <div className="wrapStud">
        {students.map((current, i)=>{
        return (
          <Student key={i} student={current}/>
        )
        },[])}
      </div>
    </div>
  );
}


export default App;
