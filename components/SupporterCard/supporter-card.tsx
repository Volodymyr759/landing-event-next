import { SupporterCardProps } from './supporter-card.props';

export const SupporterCard = ({supporter}: SupporterCardProps): JSX.Element => {
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
                <img
                    src={supporter.imgSrc}
                    className="img-fluid"
                    alt={supporter.imgAlt}
                />
            </div>
        </div>
    );
};