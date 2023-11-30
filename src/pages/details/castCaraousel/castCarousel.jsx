import React from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import './style.scss'
import Img from '../../../components/LazyImageLoader/Img'
import { useSelector } from 'react-redux'
const CastCarousel = ({credits}) => {
  console.log(credits)
  console.log('in')
  const profile_prefix=useSelector(state=>state.home.url.profile)
  return (
    <div className='cast-carousel'>
      <ContentWrapper>
      <div className="carousel-title">Top Cast</div>
      <div className="strip">
      {
        credits?.cast.map(cast=>(
          <div className="cast-object">
            <div className="cast-image">
              <Img src={profile_prefix+cast?.profile_path}/>
             </div>
             <div className="cast-name">{cast?.name}</div>
             <div className="cast-character">{cast?.character}</div>
          </div>
        ))
        
        
      }
      </div>
      </ContentWrapper>
    </div>

  )
}

export default CastCarousel
