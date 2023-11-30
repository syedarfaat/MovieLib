import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Carousel from '../Carousel/Carousel';
import './style.scss'
import ContentWrapper from '../ContentWrapper/ContentWrapper';
const SimilarMovies = () => {
    const{id,mediaType}=useParams();
    const {data,loading}=useFetch(`/${mediaType}/${id}/similar`)
    console.log(data)
  return (
    
    <div className='similar-movies'>
    <ContentWrapper>
        <div className="section-title">Similar Movies</div>
      <Carousel
    data={data?.results}
    loading={loading}
    mediaType={mediaType}
      />
      </ContentWrapper>
    </div>
    
  )
}

export default SimilarMovies
