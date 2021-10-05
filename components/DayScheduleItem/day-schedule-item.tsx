import { DayScheduleItemProps } from './day-schedule-item.props';
import { ScheduleItem } from '../ScheduleItem/schedule-item';

export const DayScheduleItem = ({ dayScheduleItem }: DayScheduleItemProps): JSX.Element => {
    return (
        <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id={dayScheduleItem.dayCode}>
            {dayScheduleItem.dayItems.map(scheduleItem => <ScheduleItem scheduleItem={scheduleItem} key={scheduleItem.time} />)}
        </div>
    );
};