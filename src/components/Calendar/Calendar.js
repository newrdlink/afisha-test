import React, { useState, useEffect } from 'react';
import Month from '../Month/Month';
import moment from 'moment';
import { currentMonthNow } from '../../helpers/GetCurrentMonth'

const Calendar = () => {
  const [currentMonths, setCurrentMonth] = useState([])
  const [manipulateMonth, setManipulateMonth] = useState(moment.updateLocale('en', { week: { dow: 1, doy: 7 } }))

  // // const month = moment.updateLocale('en', { week: { dow: 1 } });
  // // console.log(moment.updateLocale('en', { week: { dow: 1 } }))
  // // console.log(moment(month).add(1, 'month').startOf('month').startOf('week'))

  // // useEffect(() => {
  // //   const monthInInitial = currentMonthNow()
  // //   setManipulateMonth(month)

  // // }, [month])

  useEffect(() => {
    setCurrentMonth(currentMonthNow(manipulateMonth))
  }, [manipulateMonth])

  const monthHandlerUp = () => {
    // const month = moment.updateLocale('en', { week: { dow: 1 } });
    console.log('добавить месяц')
    // console.log(manipulateMonth)
    // setCurrentMonth(() => currentMonthNow(moment(month).add(1, 'month')))
    setManipulateMonth(moment(manipulateMonth).add(1, 'month'))
    // console.log(moment(month).add(1, 'month'))
    // console.log(setCurrentMonth(moment(month).add(1, 'month')))
    // console.log(moment(manipulateMonth).Month())
  }

  const monthHandlerDown = () => {
    console.log('Убрать месяц')
    setManipulateMonth(moment(manipulateMonth).subtract(1, 'month'))
  }



  return (
    <>
      <Month
        arrWeeks={currentMonths}
        monthHandlerUp={monthHandlerUp}
        monthHandlerDown={monthHandlerDown}
        manipulateMonth={moment(manipulateMonth).format('YYYY-MM') || ''}
      />
    </>
  )
}

export default Calendar;
