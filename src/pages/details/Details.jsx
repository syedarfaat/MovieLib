import React from 'react'
import './style.scss'
import DetailsBanner from './DetailsBanner/DetailsBanner'
import CastCarousel from './castCaraousel/castCarousel'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import VideosCarousel from './videosCarousel/VideosCarousel'
import SimilarMovies from '../../components/similarMovies/SimilarMovies'
import Recomendations from '../../components/Recomendations/Recomendations'

const Details = () => {
  const {mediaType, id}=useParams()
  const {data:credits,loading:creditsloading}=useFetch(`/${mediaType}/${id}/credits`)
  const {data:videos,loading:videoLoading}=useFetch(`/${mediaType}/${id}/videos`)
  return (
    <div className='details'>
    <DetailsBanner credits={credits} videos={videos}/>
    <CastCarousel credits={credits}/>
    <VideosCarousel videos={videos}/>
    <SimilarMovies/>
    <Recomendations/>
    </div>
  )
}

export default Details
