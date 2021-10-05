import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IDaySchedule } from "../../infrastructure/interfaces/day-schedule.interface";

export interface DayScheduleItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    dayScheduleItem: IDaySchedule;
}