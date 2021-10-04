import { IDaysProps } from './days.props';

export const DaysList = ({ days }: IDaysProps): JSX.Element => {
    return (
        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
            {
                days.map((day, index) =>
                    <li key={day.code} className="nav-item">
                        <a
                            className={index == 0 ? "nav-link active" : "nav-link"}
                            href={'#' + day.code}
                            role="tab"
                            data-bs-toggle="tab"
                        >
                            {day.title}
                        </a>
                    </li>
                )
            }
        </ul>
    );
};