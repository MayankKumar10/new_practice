import React, { useEffect, useState } from 'react'

export const TrafficLight = () => {

  let LightJSON = {
    red: {
      background: "red",
      duration: "4000",
      next: "green"
    },
    yellow: {
      background: "yellow",
      duration: "500",
      next: "red"
    },
    green: {
      background: "green",
      duration: "3000",
      next: "yellow"
    },
  }

  const [currentColor, setCurrentColor] = useState("red")

  useEffect(()=>{

    let { duration, next} = LightJSON[currentColor]

    let currentTimer = setTimeout(()=> setCurrentColor(next), duration)

    return () => clearTimeout(currentTimer)

  },[currentColor])

  return (
    <div>
      <h4>Traffic Light</h4>
      <div style={{display: "flex", width: "100px", background: "black", borderRadius: "12px"}}>
        {Object.keys(LightJSON).map((color)=> (
          <div key={color} style={{width: "50px", height: "50px", borderRadius: "50%", backgroundColor: currentColor == color ? LightJSON[color].background : "#555" }}></div>
        ))}
      </div>
    </div>
  )
}
