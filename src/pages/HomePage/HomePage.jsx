import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import RestaurantsList from "../../components/RestaurantsList/RestaurantsList";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <RestaurantsList />
      <Footer />
    </>
  );
};

export default HomePage;
