import moment from 'moment'

export const onlyTime = date => moment(date).format("hh:mm A")
export const regularDate = date => moment(date).format("DD/MM/YYYY")
export const regularDateTime = date => moment(date).format("DD/MM/YYYY LT")
export const readableDate = date => moment(date).format("ddd ll")
export const shortDate = date => moment(date).format("Do MMM")
export const fullDate = date => moment(date).format("Do MMM YY")
export const readableTime = time => moment(time, "hmm").format("LT")
