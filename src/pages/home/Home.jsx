import React from 'react'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './Trending/Trending'
import WhatsPopular from './Popular/whatsPopular'
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
