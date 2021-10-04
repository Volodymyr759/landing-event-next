import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IDaySchedule } from "../../infrastructure/interfaces/day-schedule.interface";

export interface DaySchedulesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    daySchedules: IDaySchedule[];
}