export type PeriodType = "day" | "month" | "year"

export type IAge = {
    [k in PeriodType]: number | null
}

export type IAgeError = {
    [k in PeriodType]: string
}