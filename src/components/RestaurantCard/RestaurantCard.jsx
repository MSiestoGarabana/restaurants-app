import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, Rating } from "@mui/material";
import MyDatePicker from "../DatePicker/DatePicker";
import { ExpandMore } from "./ExpandMore";

import { setHours, setMinutes } from "date-fns";

import "./RestaurantCard.css";
import RestaurantInfo from "./RestaurantInfo";
import { getFormattedDateAndHour } from "../../utils/formatDateUtils";

const RestaurantCard = ({
  name,
  description,
  type,
  price,
  rating,
  imageURL,
}) => {
  const [expanded, setExpanded] = useState(false);

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 14)
  );

  const [reservation, setReservation] = useState(undefined);

  const { formatedDate, formatedHour } = getFormattedDateAndHour(reservation);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleReservation(date) {
    setReservation(date);
  }

  return (
    <Card className="restaurantCard">
      <div className="restaurantCard__cardContent">
        <CardMedia
          className="restaurantCard__image"
          image={imageURL}
          title={name}
        />
        <div className="restaurandCard__title-wrapper">
          <Typography variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="h5">{type}</Typography>
          <Rating value={rating} precision={0.5} />
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </div>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <RestaurantInfo
          description={description}
          price={price}
          startDate={startDate}
          setStartDate={setStartDate}
          handleReservation={handleReservation}
          formatedDate={formatedDate}
          formatedHour={formatedHour}
          reservation={reservation}
        />
      </Collapse>
    </Card>
  );
};

export default RestaurantCard;
