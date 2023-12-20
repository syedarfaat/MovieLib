import React, { useEffect,useState } from 'react'
import useFetch from'../../hooks/useFetch'
import './style.scss'
import { useParams } from 'react-router-dom'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import PosterObject from '../../components/PosterObject/PosterObject'
import { fetchDataFromApi } from '../../utils/api'
import { Spinner } from '../../components/Spinner/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
const SearchResult = () => {
  const {query}=useParams();
  const [pageNumber,setPage]=useState(1)
  const [data,setData]=useState(null)
  const [loading,setloading]=useState(true)
  console.log(pageNumber)
  const InitialFetch=()=>{
    setPage(1)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNumber}`).then((res)=>{
      setData(res)
      setPage(page=>page+1)
      setloading(false)
      console.log(data)
      console.log(pageNumber)

    })
  }



  useEffect(()=>{
  InitialFetch()
  },[query])
  
  
  return (

    <div className='search-result'>
    {loading&&<Spinner/>}
    <ContentWrapper>
      <div className="content">
        <div className="sectionHeading">
            { data?.results.length>0? `Search results for '${query}'`:`No results found for '${query}'`}
        </div>
        <div className="items">
        

        {data?.results.map(item=>(
          <PosterObject item={item}/>
        ))

        }
        
        </div>
        
      </div>
      </ContentWrapper>
  
    </div>
  )
}

export default SearchResult
