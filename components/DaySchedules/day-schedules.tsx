import { DaySchedulesProps } from './day-schedules.props';
import { DayScheduleItem } from '../DayScheduleItem/day-schedule-item';

export const DaySchedules = ({ daySchedules }: DaySchedulesProps): JSX.Element => {
    return (
        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
            {daySchedules.map(daySchedule => <DayScheduleItem dayScheduleItem={daySchedule} key={daySchedule.dayCode} />)}
        </div>
    );
};