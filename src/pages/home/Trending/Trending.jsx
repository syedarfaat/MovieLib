import React,{useState} from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import SwitchTabs from '../../../components/Switch Tabs/SwitchTabs'
import Carousel from '../../../components/Carousel/Carousel'

export default function Trending() {
  const[endpoint,setEndpoint]=useState('day')
 const {data,loading}=useFetch(`/trending/all/${endpoint}`)
 console.log(data)

 const onTabChange=(url,index)=>{
  setEndpoint(url.toLowerCase())
  
    
 }
  return (
    <div className='coursel-section'>
        <ContentWrapper>
      <span className="coursel-title">Trending</span>
      <SwitchTabs data={['Day','Week']} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}
