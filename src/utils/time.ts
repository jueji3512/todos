import dayjs from "dayjs";
import type { ConfigType } from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const formatter = {
  dateTime: "YYYY-MM-DD",
  date: "YYYY-MM-DD HH:mm:ss",
  year: "YYYY",
  month: "MM",
  day: "DD",
  time: "HH:mm:ss",
}

const formatTime = (time: ConfigType, formatter: string) => {
  return dayjs(time).utc().format(formatter)
}

const format = {
  dateTime: (time: ConfigType) => formatTime(time, formatter["dateTime"]),
  date: (time: ConfigType) => formatTime(time, formatter["date"]),
  year: (time: ConfigType) => formatTime(time, formatter["year"]),
  month: (time: ConfigType) => formatTime(time, formatter["month"]),
  day: (time: ConfigType) => formatTime(time, formatter["day"]),
  time: (time: ConfigType) => formatTime(time, formatter["time"]),
}

export {
  format,
}