import React from 'react'
import Player from './Player'
import PlayerList from './PlayerList';

const VideoContainer = ({state,play}) => {
  return (
    <div>
        <article>
            <aside>
        <Player  play={play}></Player>
        </aside>


        <aside>
            {
                state.map((data)=>{
                    console.log(data);

                    return <PlayerList key={data.id} data={data}></PlayerList>
                    
                }

                )
            }
        </aside>
        </article>
    </div>
  )
}

export default VideoContainer