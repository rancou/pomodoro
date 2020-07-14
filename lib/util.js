export const formatTimeLeft = (time) =>
  `${formatTime(time / 60)}:${formatTime(time % 60)}`

export const formatTime = (time) => ('0' + Math.floor(time)).substr(-2)

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)
