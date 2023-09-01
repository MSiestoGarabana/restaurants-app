import React from "react";
import { CardContent, Typography, Button } from "@mui/material";
import MyDatePicker from "../DatePicker/DatePicker";
import "./RestaurantCard.css";

const RestaurantInfo = ({
  description,
  price,
  startDate,
  setStartDate,
  handleReservation,
  formatedDate,
  formatedHour,
  reservation,
  setReservation,
}) => {
  return (
    <CardContent className="restaurantCard__container--cardContent">
      <Typography>{description}</Typography>
      <Typography>{`${price}$`}</Typography>
      <div className="restaurantCard__container--reservationPicker">
        <MyDatePicker
          label="Make a reservation"
          startDate={startDate}
          setStartDate={setStartDate}
          handleReservation={handleReservation}
        />
        {reservation && (
          <Button color="error" onClick={() => setReservation(null)}>
            Cancel reservation
          </Button>
        )}
      </div>
      {reservation && (
        <Typography>
          A reservation was made on {formatedDate} at {formatedHour}
        </Typography>
      )}
    </CardContent>
  );
};

export default RestaurantInfo;
