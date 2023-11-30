import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Carousel from '../Carousel/Carousel';

const Recomendations = () => {

    const{id,mediaType}=useParams();
    const {data,loading}=useFetch(`/${mediaType}/${id}/recommendations`)
    console.log(data)
  return (
  
    
    <div className='similar-movies'>
    <ContentWrapper>
        <div className="section-title">Recommendations</div>
      <Carousel
    data={data?.results}
    loading={loading}
    mediaType={mediaType}
      />
      </ContentWrapper>
    </div>
    
  )

  
}

export default Recomendations
