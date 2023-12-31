import React from 'react'
import ReactPlayer from 'react-player'
import './style.scss'
const VideoPopUp = ({show,setShow,Vid,setVid,position}) => {
    
    const closeVid=()=>{
        setShow(false)
        setVid(null)
    }
  return (
    <div style={{top:`${position?position:0}`}} className={`videoPopUp ${show?'show':''}`}>
      <div className="opacity-layer" onClick={()=>closeVid()}></div>
      <div className="videoBox">
        <span className="close" onClick={()=>closeVid()}>close</span>
        <ReactPlayer
        url={`https://www.youtube.com/watch?v=${Vid}`}
    controls
    height="100%"
    
    width="100%"
    playing='true'
        />
      </div>
    </div>)
  
}

export default VideoPopUp
