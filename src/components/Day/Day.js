import React from 'react';
import './Day.css'
import moment from 'moment';


const Day = ({ day, holidays }) => {

  // console.log(moment(day).format("D"))

  // console.log(holidays)

  const dayNumber = moment(day).format("D")

  return (
    <div className="day">
      <p className="day__number">{dayNumber}</p>
    </div>
  )
}

export default Day;
