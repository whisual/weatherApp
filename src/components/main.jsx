import React from 'react'
import Header from './header'
import Homepage from './homePage'
import LeftSideBar from './leftSidebar'

const main = () => {

  return (
    <div>
      <Header/>
      <div className='flex justify-between'>
        <LeftSideBar />
        <Homepage/>
      </div>
    </div>
  )
}

export default main
