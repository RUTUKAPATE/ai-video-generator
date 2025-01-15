import React, { useContext } from 'react'
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig } from 'remotion'
import * as Bungee from '@remotion/google-fonts/Bungee'
import * as Anton from '@remotion/google-fonts/Anton'
import * as Parisienne from '@remotion/google-fonts/Parisienne'
import * as Pacifico from '@remotion/google-fonts/Pacifico'
import { TextAnimation } from '@/app/_data/Animations'
import { VideoFrameContext } from '@/app/_context/VideoFramesContext'


function RemotionComposition({frameList}) {
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext) 
  let trackFrame=0;
  const {width,height,fps}=useVideoConfig();
  const currentFrame=useCurrentFrame();
  Bungee.loadFont();
  Anton.loadFont();
  Parisienne.loadFont();
  Pacifico.loadFont();

  return (
    <AbsoluteFill style={{backgroundColor:'black'}}>

        {frameList?.length>0&&frameList?.map((frame,index)=>{
            const fromFrame=index==0?0:trackFrame;
            trackFrame=trackFrame+frame.duration*30;
            const duration=frame.duration*30
            if(isNaN(fromFrame))
            {
              fromFrame=0;
            }
          return(
            <Sequence key={index} from={fromFrame} durationInFrames={duration} style={{
              background:frame.bgColor,
            }}>

                <AbsoluteFill>
                  {frame?.sticker&& <img src={frame?.sticker} alt={'emoji'} width={50} height={50} style={{
                    transform: `scale(${frame?.stickerSize}) translateX(${frame?.stickerPositionX??50}px) translateY(${frame?.stickerPositionY??50}px)`,
                  }}/>}
                </AbsoluteFill>
                <AbsoluteFill style={{
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  fontFamily:frame?.fontFamily
                  // transform:`translateX(${width/2-30}px) translateY(${height/2-30}px)`
                }}>
                  <h2 style={{
                    color:frame?.textColor,
                    fontSize:frame?.fontSize,
                    transform:`${TextAnimation(frame.animation,currentFrame,fps,fromFrame,width,height)}`

                  }}>{frame.text}</h2>
                </AbsoluteFill>

            </Sequence>
          )
        })}

        <Audio volume={0.5} src={staticFile(videoFrames?.music || "default-audio.mp3")} />
    </AbsoluteFill>
  ) 
}

export default RemotionComposition