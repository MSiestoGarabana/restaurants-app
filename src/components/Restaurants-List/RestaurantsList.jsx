import React from 'react'
import Restaurant from '../Restaurant/Restaurant'
import RestaurantsData from '../../database/restaurants.json'
const RestaurantsList = () => {
  console.log(RestaurantsData)
  return (
    <div>
      {RestaurantsData.map((restaurant, index) => {
        const {name, type, price, rating, imageURL} = restaurant
        return (
          <Restaurant 
            key={index}
            name={name}
            type={type}
            price={price}
            rating={rating}
            imageURL={imageURL} 
          />
        )
      })}
   </div>
  )
}

export default RestaurantsList
