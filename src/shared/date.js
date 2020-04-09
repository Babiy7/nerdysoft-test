const options = {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export function initDate() {
  let date = new Date();

  return date.toLocaleDateString("en-GB", options);
}
