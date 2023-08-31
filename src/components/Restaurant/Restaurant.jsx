import React from 'react'

const Restaurant = ({name , type, price, rating, imageURL}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{imageURL}</p>
    </div>
  )
}

export default Restaurant
