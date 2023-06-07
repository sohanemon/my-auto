export async function manFetcher() {
  const res = await fetch('https://static.my.ge/myauto/js/mans.json');
  return await res.json();
}
