import { useState } from 'react'

const Task3 = () => {

    const d = new Date().toLocaleTimeString()

    let [time,settime] = useState(d)

    const updateTime = () => {
      let UT = new Date().toLocaleTimeString()
      settime(UT)
    }
    setInterval(updateTime,1000)

    
  return (
    <>
      <h1>{time}</h1>
    </>
  )

}


export default Task3