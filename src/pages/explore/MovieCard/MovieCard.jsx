import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style.scss";
import Img from "../../../components/LazyImageLoader/Img";

import PosterFallback from "../../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const genres=useSelector(state=>state.home.genres)
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
    return (
        <div
            className="movieCard"
            onClick={() =>
                navigate(`/${data.media_type || mediaType}/${data.id}`)
            }
        >
            <div className="posterBlock">
                <Img className="posterImg" src={posterUrl} />
                {!fromSearch && (
                    <React.Fragment>
                    <div className="circleRating"> 
                                    <CircularProgressbar
                                    text={data?.vote_average.toFixed(1)}
                                     value={data?.vote_average} 
                                     maxValue={10} 
                                     
                                     styles={buildStyles({
                                        pathColor:
                                        data?.voter_average< 5 ? "red" : data?.voter_average < 7 ? "orange" : "green",
                                    })}
                                    /></div>
                        
                                    <div className="genres">
                                    {
                                        
                                        data?.genre_ids?.slice(0,2).map(genreId=>(
                                            
                                            <div className="genre">{genres[genreId]?.name}</div>
                                        ))
                                    }
                                    
                                    
                                 </div>
                    </React.Fragment>
                )}
            </div>
            <div className="textBlock">
                <span className="title">{data.title || data.name}</span>
                <span className="date">
                    {dayjs(data.release_date).format("MMM D, YYYY")}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;

// CSS
