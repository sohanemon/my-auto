// @ts-nocheck
export function isHourOld(date: string, hour: number) {
  var hourInMilliseconds = hour * 60 * 60 * 1000;
  var currentDate = new Date();
  var parsedOrderDate = new Date(date);
  return currentDate - parsedOrderDate >= hourInMilliseconds;
}
