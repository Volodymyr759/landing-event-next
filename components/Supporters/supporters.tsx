import { SupportersProps } from './supporters.props';
import { SupporterCard } from '../SupporterCard/supporter-card';

export const SupporterList = ({ supporters }: SupportersProps): JSX.Element => {
    return (
        <div className="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">
            {supporters.map(supporter => <SupporterCard key={supporter.imgSrc} supporter={supporter} />)}
        </div>
    );
};