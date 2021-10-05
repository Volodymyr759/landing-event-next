import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IScheduleItem } from "../../infrastructure/interfaces/schedule-item.interface";

export interface ScheduleItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    scheduleItem: IScheduleItem;
}