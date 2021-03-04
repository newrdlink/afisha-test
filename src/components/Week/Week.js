import React from 'react';
import Day from '../Day/Day';
import './Week.css'

const Week = ({ arrDays = [] }) => {
  // console.log(arrDays)

  return (
    <div className="week">
      {arrDays.map((day) => <Day key={day._d} day={day._d} holidays={day.holidays} />)}
    </div>
  )
}
export default Week;
