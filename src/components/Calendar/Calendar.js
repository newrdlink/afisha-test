import React from 'react';
import Month from '../Month/Month';
import moment from 'moment';

const Calendar = () => {
  // initial obj and start week from Monday
  moment.updateLocale('en', { week: { dow: 1 } });

  const firstDay = moment().startOf('month').startOf('week')
  const lastDay = moment().endOf('month').endOf('week')

  let day = firstDay.clone()

  let newArr = []

  do {
    newArr.push(day.clone())
    day.add(1, 'day')

  }

  while (!day.isSameOrAfter(lastDay))

  return (
    <>
      <Month arrWeeks={newArr} />
    </>
  )
}

export default Calendar;
