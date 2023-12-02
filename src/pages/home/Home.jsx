import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './Trending/Trending'
import WhatsPopular from './Popular/WhatsPopular'
import './style.scss'
import TopRated from './topRated/TopRated'
export default function Home() {
  return (
    <div className='home'>
    
    <HeroBanner/>
    
    <Trending/>
    <WhatsPopular/>
    <TopRated/>
    
    </div>
  )
}
