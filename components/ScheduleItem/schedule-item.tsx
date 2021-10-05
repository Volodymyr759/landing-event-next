import { ScheduleItemProps } from './schedule-item.props';

export const ScheduleItem = ({ scheduleItem }: ScheduleItemProps): JSX.Element => {
    return (
        <div className="row schedule-item">
            <div className="col-md-3"><time>{scheduleItem.time}</time></div>
            <div className="col-md-10">
                <div className="speaker">
                    {scheduleItem.imgSrc && <img src={scheduleItem.imgSrc} alt={scheduleItem.imgAlt} />}
                </div>
                <h4>{scheduleItem.boldTitle} {scheduleItem.italicTitle && <span>{scheduleItem.italicTitle}</span>}</h4>
                <p>{scheduleItem.description}</p>
            </div>
        </div>
    );
};