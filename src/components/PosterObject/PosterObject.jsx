import React from 'react'
import './style.scss'
import dayjs from 'dayjs'
import Img from '../LazyImageLoader/Img'
import { useSelector } from 'react-redux'
import PosterFallback from "../../assets/no-poster.png";
import { useNavigate } from 'react-router-dom'


const PosterObject = ({item}) => {
    const navigate=useNavigate()
    const url=useSelector(state=>state.home.url.poster)
    
    const poster_url= item?.poster_path?url+item.poster_path:PosterFallback;

  return (
    <div className="content-card" 
                        onClick={()=>navigate(`/${item.media_type?item.media_type:mediaType
                            }/${item?.id}`)}
                        >
                        <div className="top">
                             <div className="img">   
                                <Img src={poster_url}/>

                             </div>
                            
                        </div>
                        <div className="bottom">
                            <div className="title">{item.title?item.title:item.name}</div>
                            <div className="date">{dayjs(item.release_date).format('MMM D, YYYY')}</div>
                        </div>
                        </div>
                                    )
}
                        
export default PosterObject
