import React from 'react'
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion'

function RemotionComposition({frameList}) {
  let trackFrame=0;
  const {width,height}=useVideoConfig();
  return (
    <AbsoluteFill style={{backgroundColor:'black'}}>

        {frameList.map((frame,index)=>{
            const fromFrame=index==0?0:trackFrame;
            trackFrame=trackFrame+frame.duration*30;
            const duration=frame.duration*30
          return(
            <Sequence key={index} from={fromFrame} durationInFrames={duration}>
                <AbsoluteFill style={{
                  transform:`translateX(${width/2-30}px) translateY(${height/2-30}px)`
                }}>
                  <h2 style={{
                    color:'white',

                  }}>{frame.text}</h2>
                </AbsoluteFill>
            </Sequence>
          )
        })}
    </AbsoluteFill>
  ) 
}

export default RemotionComposition