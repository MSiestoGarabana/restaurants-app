import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantsData from "../../database/restaurants.json";

import "./RestaurantsList.css";

const RestaurantsList = () => {
  return (
    <div className="restaurantsList">
      {RestaurantsData.map((restaurant, index) => {
        const { name, description, type, price, rating, imageURL } = restaurant;
        return (
          <RestaurantCard
            key={index}
            name={name}
            description={description}
            type={type}
            price={price}
            rating={rating}
            imageURL={imageURL}
          />
        );
      })}
    </div>
  );
};

export default RestaurantsList;
