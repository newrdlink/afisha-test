import moment from 'moment';

export const currentMonthNow = (month) => {

  moment.updateLocale('en', { week: { dow: 1 } });

  const firstDay = moment(month).startOf('month').startOf('week')
  const lastDay = moment(month).endOf('month').endOf('week')

  let day = firstDay.clone()

  let newArr = []

  do {
    newArr.push(day.clone())
    day.add(1, 'day')
  }
  while (!day.isSameOrAfter(lastDay))

  return newArr
}


  // initial obj and start week from Monday
  // moment.updateLocale('en', { week: { dow: 1 } });

  // const firstDay = moment().startOf('month').startOf('week')
  // const lastDay = moment().endOf('month').endOf('week')

  // let day = firstDay.clone()

  // let newArr = []

  // do {
  //   newArr.push(day.clone())
  //   day.add(1, 'day')
  // }
  // while (!day.isSameOrAfter(lastDay))
