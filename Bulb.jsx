import React, { useRef, useState } from 'react'

import './App.css'

const Bulb = () => {

    let [state,setState]=useState(false);
    let imgRef=useRef()

let handleON=()=>{
    setState(!state);
    imgRef.current.style.backgroundImage="url('https://t4.ftcdn.net/jpg/08/29/35/71/360_F_829357191_KFvzOEjYnAz1oSs0EadxSeXfYr5QCvOu.jpg')"
 }
 let handleOFF=()=>{
  setState(!state);
  imgRef.current.style.backgroundImage="url('https://t3.ftcdn.net/jpg/08/01/65/98/360_F_801659875_SXT2BcopEf0ywm1ZfQbKGkbBUjqmxWQ6.jpg')"
 }

  return (
    <div id='b1'>
    <img ref={imgRef} height="650px" width="500px" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></img>
        <div id='b2'>
          <button id='bt' onClick={handleON}>ON</button>
       <button onClick={handleOFF}>OFF</button>
        </div>
    </div>
  )
}

export default Bulb