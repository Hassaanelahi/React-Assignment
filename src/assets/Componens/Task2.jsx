import React from 'react'

const Task2 = () => {

    const Task2_d = new Date()

    let Task2_date = Task2_d.toLocaleDateString();
    let Task2_time = Task2_d.toLocaleTimeString();

  return (
    <>
        <h1>Hassaan Elahi</h1>
        <p>{Task2_date}</p>
        <p>{Task2_time}</p>
    </>
    
  )
}

export default Task2