export function formatDate(date: string, short = false) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit", month: "short", ...(short ? {} : { year: "numeric" }), timeZone: "UTC",
  }).format(new Date(date));
}
