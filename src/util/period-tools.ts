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

export function getTimeDifference(dateString) {
  const orderDateTime = new Date(dateString).getTime();
  const currentTime = Date.now();
  const timeDifference = currentTime - orderDateTime;
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference < 24) {
    return hoursDifference + ' საათის';
  } else {
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference + ' დღის';
  }
}
