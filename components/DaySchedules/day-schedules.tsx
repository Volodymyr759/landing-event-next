import { DaySchedulesProps } from './day-schedules.props';

export const DaySchedules = ({ daySchedules }: DaySchedulesProps): JSX.Element => {
    return (
        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
            {daySchedules.map((daySchedule, index) =>
                <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id={daySchedule.dayCode} key={index}>
                    {daySchedule.dayItems.map((dayItem, index) =>
                        <div className="row schedule-item" key={index + 10}>
                            <div className="col-md-3"><time>{dayItem.time}</time></div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    {dayItem.imgSrc && <img src={dayItem.imgSrc} alt={dayItem.imgAlt} />}
                                </div>
                                <h4>{dayItem.boldTitle} {dayItem.italicTitle && <span>{dayItem.italicTitle}</span>}</h4>
                                <p>{dayItem.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};