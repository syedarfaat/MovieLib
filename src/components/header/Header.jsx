import React, { useEffect, useState } from 'react'
import './header.scss'
import MovixLogo from '../../assets/movix-logo.svg'
import {  HiOutlineSearch} from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const[mobileMenu,setMobileMenu]=useState(false);
  const [searchOn,setSearch]=useState(false);
  const [query,setquery]=useState("")
  const navigate=useNavigate();
  const [show,setShow]=useState('show');
  const [lastScroll,setLastScroll]=useState(0);
  

  
  useEffect(() => {
    console.log('adding event listener');
    let lastScroll = window.scrollY;
    const handleScroll=()=> {
      const currentScrollPosition=window.scrollY;
      if (currentScrollPosition > lastScroll && !mobileMenu) {
        setShow('hide');
      } else {
        setShow('show');
      }
      lastScroll=currentScrollPosition;
   }
   window.addEventListener('scroll',handleScroll);
   return(()=>{
    window.removeEventListener('scroll',handleScroll)
   })
  },[]);


  const handleSearch=((event)=>{
    if(event.key==="Enter"&&event.target.value.length>0)
    navigate(`/search/${event.target.value}`)
  })  

  const OpenSearchBar=()=>{
    setMobileMenu(false)
    setSearch(true)
    console.log(searchOn)
  }
  const openMobileMenu=()=>{
    setSearch(false)
    setMobileMenu(true);
  }
  
  const NavigationHandler=((type)=>{
    if(type=='movies'||type=='tv-shows')
     navigate(`/explore/${type}`)
    else if(type=='/')
    {
     navigate('/')
     setSearch(false)
    }
    setMobileMenu(false)
  })

  return (
    <div className= {`header ${mobileMenu?"mobileView":""} ${searchOn?"search":""} ${show}`}>
    <div className="wrapper">
      <div className="left">
        <div className="logo" onClick={()=>NavigationHandler('/')}><img src={MovixLogo}/></div>
      </div>
      <ul className="menuItems">
        <li className="menuItem" onClick={()=>{NavigationHandler("movies")}}>Movies</li>
        <li className="menuItem" onClick={()=>{NavigationHandler("tv-shows")}}>TV Shows</li>
        <li className="menuItem" onClick={OpenSearchBar}><HiOutlineSearch/></li>
      </ul>

      <div className="mobileMenu">
        <HiOutlineSearch onClick={OpenSearchBar}/>
        {mobileMenu?(
          <VscChromeClose onClick={()=>setMobileMenu(false)}/>
        ):<SlMenu onClick={openMobileMenu}/>}
      </div>
      <div className='searchBar'>
      <div className="header-wrapper">
        <input
         placeholder='Search for a movie or a tv show'
         onKeyUp={handleSearch}
         type='text'
         />
       <div className="close" onClick={()=>{setSearch(false)}}><VscChromeClose/></div>
      </div>
      </div>
    </div>
    </div>
  )
}
