function getFormattedDateAndHour(reservation) {
  const newDate = new Date(reservation);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const hourOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const formatedDate = newDate.toLocaleDateString("en-US", dateOptions);
  const formatedHour = newDate.toLocaleTimeString("en-US", hourOptions);
  return {
    formatedDate,
    formatedHour,
  };
}

export { getFormattedDateAndHour };
