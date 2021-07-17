import isDate from 'date-fns/isDate'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import differenceInDays from 'date-fns/differenceInDays'
import differenceInMonths from 'date-fns/differenceInMonths'
import differenceInYears from 'date-fns/differenceInYears'
import differenceInHours from 'date-fns/differenceInHours'

const TimeLimits = {
  MINUTES: 60,
  HOURS: 24,
  DAYS: 30,
  MONTHS: 12,
  YEARS: 10000,
}

export const getDiffBetweenTwoDates = (date) => {
  if (!isDate(date)) {
    console.error('Invalid Date by Params')
    return {
      minutes: 0,
      hours: 0,
      days: 0,
      months: 0,
      years: 0,
    }
  }

  const minutes = differenceInMinutes(new Date(), date)
  const hours = differenceInHours(new Date(), date)
  const days = differenceInDays(new Date(), date)
  const months = differenceInMonths(new Date(), date)
  const years = differenceInYears(new Date(), date)

  return {
    minutes,
    hours,
    days,
    months,
    years,
  }
}

export const getBestTimeFormat = (date) => {
  const times = getDiffBetweenTwoDates(date)

  if (times.minutes <= TimeLimits.MINUTES) {
    return { time: times.minutes, type: 'minutes' }
  }

  if (times.hours <= TimeLimits.HOURS) {
    return { time: times.hours, type: 'hours' }
  }

  if (times.days <= TimeLimits.DAYS) {
    return { time: times.days, type: 'days' }
  }

  if (times.months <= TimeLimits.MONTHS) {
    return { time: times.months, type: 'months' }
  }

  return {
    time: times.years,
    type: 'years',
  }
}
