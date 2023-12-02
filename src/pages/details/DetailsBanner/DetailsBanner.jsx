import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Img from '../../../components/LazyImageLoader/Img';
import dayjs from "dayjs";
import { PlayBtn } from './PlayBtn';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import VideoPopUp from '../../../components/videoPopUp/VideoPopUp';

import './style.scss'
import { trackWindowScroll } from 'react-lazy-load-image-component';
const DetailsBanner = ({credits,videos}) => {
  window.scrollTo(0,0)
    const{mediaType,id}=useParams()
    const [showVid,setShowVid]=useState(false);
    const backdrop_url=useSelector(state=>state?.home?.url?.backdrop_path)
    const poster_url=useSelector(state=>state?.home?.url?.poster)
    const genres=useSelector(state=>state.home.genres)

    const toHoursAndMinutes = (totalMinutes) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
   
    const {data,loading}=useFetch(`/${mediaType}/${id}`)
   
    const [Vid,setVid]=useState(videos?.results[0]?.key)
   

    const setVideoId=()=>{
      setVid(videos?.results[0]?.key)
      setShowVid(true)
    }
    const director=credits?.crew?.filter(crew=>{
     return crew.job=='Director' 
      
    })
    const writer=credits?.crew?.filter(crew=>{
      return crew.job=='Screenplay'||'Story'||'Writer' 
       
     })
  
    
    
  return (
    <div className='detailsBanner'>
    <div className="backgroundImg">
        <Img src={backdrop_url+data?.backdrop_path}/>
    </div>
    <VideoPopUp Vid={Vid} show={showVid} setShow={setShowVid} setVid={setVid}/>
      <div className="details">
      <div className="left">
        <div className="posterImg">
            <Img src={poster_url+data?.poster_path}/>
        </div>
      </div>
      <div className="right">
        <div className="movieDetails">
            <div className="title">{data?.name||data?.original_title}</div>    
            <div className="description">{data?.tagline}</div>
            <div className="genres">
                {
                    data?.genres.map((genreId)=>{

                        return <div className="genre">{genreId.name}</div>
                    })

                   
                }
            </div>
            <div className="circles">
            <div className="ratings"> 
                                    <CircularProgressbar
                                    text={data?.vote_average.toFixed(1)}
                                     value={data?.vote_average} 
                                     maxValue={10} 

                                     styles={buildStyles({
                                        pathColor:
                                        data?.voter_average< 5 ? "red" : data?.voter_average < 7 ? "orange" : "green",
                                    })}
                                    />
                            
                    </div>
                    <div className="playBtn" onClick={()=>setVideoId()}>
                    <PlayBtn/>
                    <div className="watchTrailer">Watch Trailer</div>
                    </div>

                    </div>
                                <div className="overview">
                                     <div className="overViewTitle">Overview</div>
                                    <div className="overviewData">{data?.overview}</div>
                                </div>
                                <div className="metaData">
                                    <div className="onePlus">
                                      <div className="data">
                                        <div className="dataName">Status: </div>
                                        <div className="value">{data?.status}</div>
                                      </div>
                                      <div className="data">
                                        <div className="dataName">Release Data: </div>
                                        <div className="value">{dayjs(data?.release_date).format('MMM DD YYYY')}</div>
                                      </div>
                                      <div className="data">
                                        <div className="dataName">Runtime: </div>
                                        <div className="value">{toHoursAndMinutes(data?.runtime)}</div>
                                      </div>
                                    </div>
                                    {director?.length!==0&&<div className="data">
                                        <div className="dataName">Director:</div>
                                        <div className="value">{director?director[0]?.name:''}</div>
                                </div>}
                                {writer?.length!==0&&<div className="data">
                                        <div className="dataName">Writer:</div>
                                        <div className="value">{writer?writer[0]?.name:''}</div>
                                </div>}
                            </div>

            </div>

       
      </div>
      </div>

      <div className="opacityLayer">
      
      </div>
    </div>
  )
}

export default DetailsBanner
