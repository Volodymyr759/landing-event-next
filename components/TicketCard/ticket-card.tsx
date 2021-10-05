import { TicketProps } from './ticket-card.props';

export const TicketCard = ({ ticket }: TicketProps): JSX.Element => {
    return (
        <div className="col-lg-4" data-aos="fade-up">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{ticket.accessType}</h5>
                    <h6 className="card-price text-center">${ticket.price}</h6>
                    <hr />
                    <ul className="fa-ul">
                        {
                            ticket.activities.map((activity, index) =>
                                activity.allowed ?
                                    <li key={index}><span className="fa-li"><i className="fa fa-check"></i></span>{activity.title}</li> :
                                    <li className="text-muted" key={index}> <span className="fa-li"> <i className="fa fa-times"></i></span>{activity.title}</li>
                            )}
                    </ul>
                    <hr />
                    <div className="text-center">
                        <button type="button" className="btn" data-bs-toggle="modal"
                            data-bs-target="#buy-ticket-modal" data-ticket-type="standard-access">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};