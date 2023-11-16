import React, { useRef } from "react";

import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../LazyImageLoader/Img";
import PosterFallback from "../../assets/no-poster.png";

import './Carousel.scss'
const Carousel = ({data,loading,mediaType}) => {
    const courselRef=useRef();
    const url=useSelector(state=>state.home.url.poster)
    const genres=useSelector(state=>state.home.genres)
    console.log(genres)
    const navigate=useNavigate();
    const navigation=(dir)=>{
        const container=courselRef.current;
        const scrollAmount=dir==='left'?container.scrollLeft-(container.offsetWidth+20)
        :container.scrollLeft+(container.offsetWidth)
        console.log(container.scrollLeft)
        container.scrollTo({
            left:scrollAmount,
            behavior:"smooth",
            

    })
    }

    const skel=()=>{
        return(
        <div className="loading-skeleton">
            <div className="poster skeleton">
                <div className="poster-block"></div>
            </div>
            <div className="bottom">
                <div className="text skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div> )
    }

    console.log(data)
    console.log(mediaType)
  return (
    <div className="carousel">
        <ContentWrapper>
                <BsFillArrowLeftCircleFill
                className="leftNav arrow" 
                onClick={()=>navigation('left')}
            />
            <BsFillArrowRightCircleFill 
                className="rightNav arrow"
                onClick={()=>navigation('right')}
             />
             {
                !loading?(
                    <div className="strip"
                    ref={courselRef}>
                        {
                        data?.map((item)=>{
                        const poster_url= item.poster_path?url+item.poster_path:PosterFallback
                        return(
                        <div className="content-card" 
                            onClick={()=>navigate(`/${item.media_type?item.media_type:mediaType
                            }/${item?.id}`)}
                        >
                        <div className="top">
                             <div className="img">   
                                <Img src={poster_url}/>
                                    
                                    <div className="ratings"> 
                                    <CircularProgressbar
                                    text={item?.vote_average.toFixed(1)}
                                     value={item?.vote_average} 
                                     maxValue={10} 
                                     
                                     styles={buildStyles({
                                        pathColor:
                                        item?.voter_average< 5 ? "red" : item?.voter_average < 7 ? "orange" : "green",
                                    })}
                                    /></div>  
                                     <div className="genres">
                                        {
                                            
                                            item?.genre_ids?.slice(0,2).map(genreId=>(
                                                
                                                <div className="genre">{genres[genreId]?.name}</div>
                                            ))
                                        }
                                        
                                        
                                     </div>
                             </div>
                            
                        </div>
                        <div className="bottom">
                            <div className="title">{item.title?item.title:item.name}</div>
                            <div className="date">{dayjs(item.release_date).format('MMM D, YYYY')}</div>
                        </div>
                        </div>
                        )})}
                </div>):
                    (
                    <div className="loadingskeleton">
                    {skel()}
                    {skel()}
                    {skel()}
                    {skel()}
                    
                    </div>)

             }
        </ContentWrapper>
      
    </div>
  )
}

export default Carousel
