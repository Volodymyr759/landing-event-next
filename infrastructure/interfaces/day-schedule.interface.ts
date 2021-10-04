import { IScheduleItem } from "./schedule-item.interface";

export interface IDaySchedule {
    dayCode: string;
    dayItems: IScheduleItem[];
}