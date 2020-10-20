import React from 'react';

function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }
  
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  
  const Total = ({ course }) => {
    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    var totalExercises = course.parts.reduce(function(sum, part) {
      return sum + part.exercises;
  
    }, 0)
    return(
      <p>Number of exercises {totalExercises}</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={revisedRandId()} part={part} />)}
       
      </div>
    )
  }
  
 const Course = ({courses}) => {
    return (
      <>
        {courses.map((course) => 
          { 
            return (
              <div>
            <Header key={revisedRandId()} course={course} />
            <Content key={revisedRandId()} course={course} />
            <Total key={revisedRandId()} course={course} /> 
            </div>
            )
            })}
     </>
    )
  
  }

  export default Course