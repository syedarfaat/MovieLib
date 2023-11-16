import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Img from '../../../components/LazyImageLoader/Img'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';

import './style.scss'
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
const HeroBanner = () => {
  const {url}=useSelector(state=>state.home)
  const navigate=useNavigate();
  const [query,setQuery]=useState("");
  const [background,setBackground]=useState("");
  const {data,loading}=useFetch('/movie/upcoming')
  
  useEffect(()=>{
    console.log(url)
    const bg=url.backdrop_path+data?.results[Math.floor(Math.random()*20)]?.backdrop_path
    setBackground(bg)
    console.log(bg)
  },[data])
  
  const handleQuery=(event)=>{ 
    if(event.key==='Enter'&&query.length>0)
    {
      navigate(`/search/${query}`)
    }
  }

  return (
    
    <div className='hero-banner'>
      {!loading&&<div className="background-img">
         <Img src={background} />
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className='text-above'>
        <div className="welcome">
        Welcome.
        </div>
        <div className="explore">
        Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <div className="searchInput">
        <input 
        type='text'
        placeholder='Search for a movie or tv show...'
        onChange={(event)=>setQuery(event.target.value)}
        onKeyUp={handleQuery}
        />
        <button className='searchButton' onClick={()=>handleQuery}>Search</button>
        
        </div>
        </div>
        </ContentWrapper>
  
      
    </div>
    
  )
}

export default HeroBanner
