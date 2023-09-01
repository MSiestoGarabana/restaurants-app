import React from "react";
import DatePicker from "react-datepicker";
import { TextField } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";

import { setHours, setMinutes } from "date-fns";

const includeTimes = [
  setHours(setMinutes(new Date(), 0), 12),
  setHours(setMinutes(new Date(), 30), 12),
  setHours(setMinutes(new Date(), 0), 13),
  setHours(setMinutes(new Date(), 30), 13),
  setHours(setMinutes(new Date(), 0), 14),
  setHours(setMinutes(new Date(), 30), 14),
  setHours(setMinutes(new Date(), 0), 15),
  setHours(setMinutes(new Date(), 30), 15),
  setHours(setMinutes(new Date(), 0), 16),
  setHours(setMinutes(new Date(), 0), 20),
  setHours(setMinutes(new Date(), 30), 20),
  setHours(setMinutes(new Date(), 0), 21),
  setHours(setMinutes(new Date(), 30), 21),
  setHours(setMinutes(new Date(), 0), 22),
  setHours(setMinutes(new Date(), 30), 22),
  setHours(setMinutes(new Date(), 0), 23),
  setHours(setMinutes(new Date(), 30), 23),
];

const MyDatePicker = ({
  label,
  startDate,
  setStartDate,
  handleReservation,
}) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date), handleReservation(date);
      }}
      showTimeSelect
      customInput={<TextField label={label} variant="outlined" />}
      includeTimes={includeTimes}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

export default MyDatePicker;
