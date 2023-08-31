import React from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import {Collapse} from '@mui/material';
import MyDatePicker from '../DatePicker/DatePicker';


import {setHours, setMinutes} from 'date-fns'

import './Restaurant.css'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const RestaurantCard = ({name , type, price, rating, imageURL}) => {

  const [expanded, setExpanded] = useState(false);

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date (), 0), 14)
  );

  const [reservation, setReservation] = useState(undefined)

  const newDate = new Date(reservation);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const hourOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formatedDate = newDate.toLocaleDateString("en-US", dateOptions);
  const formatedHour = newDate.toLocaleTimeString("en-US", hourOptions);


  function handleExpandClick() {
    setExpanded(!expanded);
  };


  function handleReservation(date){
    setReservation(date)
}

  return (
    <Card sx={{ width: "100%", height: "50%" }}>

      <CardMedia
        sx={{ height: 140 }}
        image={imageURL}
        title={name}
      />

      <CardContent className='cardContent'>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className='restaurantCard__container--cardContent'>
          <Typography variant='h6'>{type}</Typography>
          <div className='restaurantCard__container--ratingPrice'>
            <Typography>{`rating: ${rating}/5`}</Typography>
            <Typography>{`${price}$`}</Typography>
          </div>
          <div>
            <Typography>Make a reservation</Typography>
            <MyDatePicker 
              startDate={startDate} 
              setStartDate={setStartDate} 
              handleReservation={handleReservation}/>
          </div>
          { reservation ? <Typography> A reservation was made on {formatedDate} at {formatedHour}</Typography> : <div></div>}
        </CardContent>
      </Collapse>

    </Card>
  )
}

export default RestaurantCard
