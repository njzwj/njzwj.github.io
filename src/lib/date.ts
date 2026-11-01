export function formatDate(date: string, short = false, timeZone = "UTC") {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit", month: "short", ...(short ? {} : { year: "numeric" }), timeZone,
  }).format(new Date(date));
}

export function formatYear(date: string, timeZone = "UTC") {
  return new Intl.DateTimeFormat("en-GB", { year: "numeric", timeZone }).format(new Date(date));
}
