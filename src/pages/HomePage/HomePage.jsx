import React from 'react'
import './HomePage.css'

import NavBar from '../../components/NavBar/NavBar'
import RestaurantsList from '../../components/Restaurants-List/RestaurantsList'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <RestaurantsList/>
      <Footer/>
    </>
  )
}

export default HomePage
