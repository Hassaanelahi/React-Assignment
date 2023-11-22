import React from 'react'

const Task1 = () => {
    const Task1_time = new Date().getHours()
    let message;
   
     if(Task1_time >= 1 && Task1_time < 12){
       message = "Hellow Sir Good Morning"
     }
     else if(Task1_time >= 12 && Task1_time < 19){
       message = "Good Afternoon"
     }
     else{
       message = "Good Night"
     }
   
     return (
       <>
         <h1>{message}</h1>
       </>
     )
}

export default Task1