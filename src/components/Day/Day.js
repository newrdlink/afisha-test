import React from 'react';
import './Day.css'
import moment from 'moment';
import cn from 'classnames';


const Day = ({ day, holidays }) => {

  const currentDate = moment().format("YYYY-MM-DD")
  const thisDay = moment(day).format("YYYY-MM-DD")

  const dayNumber = moment(day).format("D")
  const isActiveDay = moment(thisDay).isSame(currentDate)

  const isDayPassed = moment(thisDay).isBefore(currentDate)
  const isDayInThisMonth = moment(thisDay).isSame(currentDate, 'month')

  // console.log(day, holidays)


  return (
    <div className={cn("day",
      { "day_has-holiday": holidays },
      { "day_active": isActiveDay }
    )}>
      <p className={cn("day__number",
        { "day_passed": isDayPassed || !isDayInThisMonth }
      )}>{dayNumber}</p>
    </div>
  )
}

export default Day;
