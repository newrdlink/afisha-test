import React from 'react';
import Week from '../Week/Week';
import './Month.css';
import { holidays } from '../../initialState'
import moment from 'moment';
// import helperModifyDay from '../../helpers'

const Month = ({ arrWeeks = [] }) => {
  
  holidays.forEach((holiday) => {
    // const { date } = i
    // console.log(moment(date, "DD-MM-YYYY hh:mm"))
    arrWeeks.forEach((item) => {
      // search that date of holiday === current date in calendar
      if (moment(item).isSame(moment(holiday.date, "DD-MM-YYYY"))) {

        const fullTimeHoliday = holiday.date + " " + holiday.time
        const timeObj = moment(fullTimeHoliday, "DD-MM-YYYY hh:mm")
        // check if no holidays => add first holiday object in Array on day 
        if (!item.holidays) {
          return item.holidays = new Array(timeObj._d)
        }
        if (!item.holidays.some((item) => item.toString() === timeObj._d.toString())) {

          // console.log(typeof item.holidays[0].toString() === typeof timeObj._d.toString())
          return item.holidays.push(timeObj._d)
        }
      }
    }
    )
  })

  // helperModifyDay(arrWeeks, holidays)

  const firstWeek = arrWeeks.slice(0, 7)
  const secondWeek = arrWeeks.slice(7, 14)
  const thirdWeek = arrWeeks.slice(14, 21)
  const fourthWeek = arrWeeks.slice(21, 28)
  const fifthWeek = arrWeeks.slice(28, 35)
  const sixthWeek = arrWeeks.slice(35, 41)



  return (
    <div className="month">
      {firstWeek && <Week arrDays={firstWeek} />}
      {secondWeek && <Week arrDays={secondWeek} />}
      {thirdWeek && <Week arrDays={thirdWeek} />}
      {fourthWeek && <Week arrDays={fourthWeek} />}
      {fifthWeek.length > 0 && <Week arrDays={fifthWeek} />}
      {sixthWeek.length > 0 && <Week arrDays={sixthWeek} />}
    </div>
  )
}

export default Month;
