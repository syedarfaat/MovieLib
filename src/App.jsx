
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getApiConfiguration, getGenres } from './store/homeSlice'
import Home from './pages/home/home'
import Header from './components/header/header'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/searchResult'
import Footer from './components/footer/footer'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/pageNotFound'

function App() {

  const dispatch=useDispatch();
fetchDataFromApi('/configuration')
    .then((res)=>{
      console.log(res)

      const url={
        backdrop_path:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original",

      }
      console.log(url)
    dispatch(getApiConfiguration(url))

 })

 useEffect(() => {
  const fetchData = async () => {
    try {
      let promises = [];
      let endpoints = ['tv', 'movie'];
      let allGenres = {};

      endpoints.forEach((endpoint) => {
        promises.push(fetchDataFromApi(`/genre/${endpoint}/list`));
      });

      const data = await Promise.all(promises);
      console.log(data);

      data.forEach(({ genres }) => {
        genres.forEach((item) => {
          allGenres[item.id] = item;
        });
      });
      console.log(allGenres);

      dispatch(getGenres(allGenres));
    } catch (error) {
      // Handle errors here
    }
  };

  fetchData();
}, []);

 
  return (
    
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
