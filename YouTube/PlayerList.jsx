import React from 'react'

const PlayerList = (props) => {
    console.log(props.data);
    let {thumnailUrl,title}=props.data
    
  return (
    <div>
        <div onClick={props.runVideo(props.data)}>
            <figure>
                <img src={thumnailUrl} alt=""></img>
            </figure>
            <h1>{title}</h1>
            </div>
    </div>
  )
}

export default PlayerList