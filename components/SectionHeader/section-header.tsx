import { SectionHeaderProps } from './section-header.props';

export const SectionHeader = ({ title, description }: SectionHeaderProps): JSX.Element => {
    return (
        <div className="section-header">
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
        </div>
    );
};