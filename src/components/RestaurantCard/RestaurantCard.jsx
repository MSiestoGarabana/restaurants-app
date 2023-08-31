import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, Rating } from "@mui/material";
import MyDatePicker from "../DatePicker/DatePicker";
import { ExpandMore } from "./ExpandMore";

import { setHours, setMinutes } from "date-fns";

import "./RestaurantCard.css";

const RestaurantCard = ({ name, type, price, rating, imageURL }) => {
  const [expanded, setExpanded] = useState(false);

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 14)
  );

  const [reservation, setReservation] = useState(undefined);
  {
    /*TODO EXTRAER A UN HOOK */
  }
  const newDate = new Date(reservation);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const hourOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const formatedDate = newDate.toLocaleDateString("en-US", dateOptions);
  const formatedHour = newDate.toLocaleTimeString("en-US", hourOptions);

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
        {/*TODO: EXTRAER A COMPONENTE*/}
        <CardContent className="restaurantCard__container--cardContent">
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
      </Collapse>
    </Card>
  );
};

export default RestaurantCard;
