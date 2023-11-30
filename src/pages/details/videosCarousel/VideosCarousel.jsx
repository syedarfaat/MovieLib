import React,{useState} from 'react'
import './style.scss'
import { PlayIcon } from '../playIcon/PlayIcon';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import Img from '../../../components/LazyImageLoader/Img';
import VideoPopUp from '../../../components/videoPopUp/VideoPopUp';

const VideosCarousel = ({videos}) => {
    const [show,setShow]=useState(false)
    const [vidId,setVidId]=useState(null)
    
    const handleClick=(key)=>{
        setVidId(key)
        setShow(true)
    }
  return (

    <div className='videos-carousel'>

    <ContentWrapper>
    <div className="title">Top Videos</div>
        <div className="video-strip">
            {
                videos?.results.map(video=>(
                    <div className="video-item" onClick={()=>handleClick(video?.key)}>
                        <div className="thumbnail">
                        <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}/>
                        <PlayIcon/>
                        </div>
                        
                           
                        <div className="videoTitle">
                            {video?.name}
                        </div>

                    </div>
                ))

            }
        </div>
    </ContentWrapper>
    <VideoPopUp
    show={show}
    setShow={setShow}
    Vid={vidId}
    setVid={setVidId}
    position={window.scrollY}
    />
    </div>
  )
}

export default VideosCarousel
