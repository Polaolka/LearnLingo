export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const optionsDate = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDate = date.toLocaleDateString("en", optionsDate);
  const formattedTime = date.toLocaleTimeString("en", optionsTime);

  return `${formattedDate} | ${formattedTime}`;
}
