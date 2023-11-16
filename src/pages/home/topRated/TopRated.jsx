import React,{useState} from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import SwitchTabs from '../../../components/Switch Tabs/SwitchTabs'
import Carousel from '../../../components/Carousel/Carousel'

export default function TopRated() {
  const[mediaType,setMediaType]=useState('movie')
 const {data,loading}=useFetch(`/${mediaType}/top_rated`)
 console.log(data)

 const onTabChange=(url,index)=>{
  setMediaType(url=='Movie'?'movie':'tv')
  
    
 }
  return (
    <div className='coursel-section'>
        <ContentWrapper>
      <span className="coursel-title">Top Rated</span>
      <SwitchTabs data={['Movie','TV Shows']} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} mediaType={mediaType}/>
    </div>
  )
}