import React from "react";
import { CardContent, Typography } from "@mui/material";
import MyDatePicker from "../DatePicker/DatePicker";

const RestaurantInfo = ({
  description,
  price,
  startDate,
  setStartDate,
  handleReservation,
  formatedDate,
  formatedHour,
  reservation,
}) => {
  return (
    <CardContent className="restaurantCard__container--cardContent">
      <Typography>{description}</Typography>
      <Typography>{`${price}$`}</Typography>
      <div>
        <MyDatePicker
          label="Make a reservation"
          startDate={startDate}
          setStartDate={setStartDate}
          handleReservation={handleReservation}
        />
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
