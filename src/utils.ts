import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Joi from "joi"
import type { IAge } from "./ts-support";

dayjs.extend(customParseFormat);

const baseNumberValidator = Joi.number().required().positive().integer().messages({
    "number.base": "This field is required",

});

export const ageValidator = Joi.object({
    day: baseNumberValidator.min(1).max(31).messages({
        "number.max": "Must be a valid day",
        "number.min": "Must be a valid day",
    }),
    month: baseNumberValidator.min(1).max(12).messages({
        "number.max": "Must be a valid month",
        "number.min": "Must be a valid month",
    }),
    year: baseNumberValidator.min(1900).max(dayjs().year()).messages({
        "number.max": "Must be in the past",
        "number.min": "Must be after 1900s",
    })
});



export function isValidDate(payload: IAge): boolean {
    return dayjs(getDateString(payload), 'YYYY-MM-DD', true).isValid();
}

export function isDateInPast(payload: IAge): boolean {
    return dayjs(getDateString(payload)).isBefore(Date.now())
}

export function getAge(payload: IAge): IAge {
    const res: IAge = { day: 0, year: 0, month: 0 };
    const now = dayjs();
    let ageInDays = now.diff(getDateString(payload), "day")

    // 365 days = 1 yr, x days = x / 365 years 
    res.year = Math.floor(ageInDays / 365)

    // remaining days in the year
    ageInDays %= 365;

    // subtract estimated number of leap years
    const leapYearCount = Math.floor(res.year / 4);
    ageInDays -= leapYearCount;

    // assuming 1 month = 30 days
    res.month = Math.floor(ageInDays / 30)

    // days remaining
    res.day = (ageInDays % 30);

    return res

}


function getDateString(age: IAge) {
    return `${age.year ?? 0}-${(age.month ?? 0)
        .toString()
        .padStart(2, "0")}-${(age.day ?? 0).toString().padStart(2, "0")}`;
}