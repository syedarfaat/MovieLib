import React, { useState } from 'react'

import './style.scss'
const SwitchTabs = ({data,onTabChange}) => {
  const [selectedTab,setSelectedTab]=useState(0)
  const [left,setLeft]=useState(0);

  const activateTab=(tab,index)=>{
    setLeft(index*100)
    setTimeout(()=>{
      setSelectedTab(index)
    },300);
    onTabChange(tab,index)

  }
  return (
    <div className='switching-tabs'>
     <div className="tab-items">
        {
          data.map((tab,index)=>{
            return <span onClick={()=>activateTab(tab,index )} className={`tab-item ${selectedTab===index?'selected':''}`} key={index}>{tab}</span>
          })
        }
        <div className="moving-background" style={{left:left}}></div>

      </div>
    </div>
  )
}

export default SwitchTabs
