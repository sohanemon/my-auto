// @ts-nocheck
export function isHourOld(date: string, hour: string) {
  let multiplier;
  if (hour.includes('h')) multiplier = hour[0];
  else if (hour.includes('d')) multiplier = hour[0] * 24;
  else multiplier = hour[0] * 24 * 7;

  const hourInMilliseconds = multiplier * 60 * 60 * 1000;
  const currentDate = new Date();
  const parsedOrderDate = new Date(date);
  return currentDate - parsedOrderDate >= hourInMilliseconds;
}
