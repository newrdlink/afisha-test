import moment from 'moment';

const helperModifyDay = ({ weeksArr = [], holidayArr = [] }) => {
  holidayArr.forEach((holiday) => {

    weeksArr.forEach((item) => {
      // search that date of holiday === current date in calendar
      if (moment(item).isSame(moment(holiday.date, "DD-MM-YYYY"))) {

        const fullTimeHoliday = holiday.date + " " + holiday.time
        const timeObj = moment(fullTimeHoliday, "DD-MM-YYYY hh:mm")

        // check if no holidays => add first holiday object in Array on day 
        if (!item.holidays) {

          return item.holidays = new Array(timeObj._d)
        }

        if (!item.holidays.some((item) => item.toString() === timeObj._d.toString())) {

          return item.holidays.push(timeObj._d)
        }
      }
    }
    )
  })
}

export default helperModifyDay;
