import { SpeakersProps } from './speakers.props';
import { SpeakerCard } from '../SpeakerCard/speaker-card';

export const SpeakerList = ({ speakers }: SpeakersProps): JSX.Element => {
    return (
        <div className="row">
            {
                speakers.map(speaker =>
                    <SpeakerCard key={speaker.name}
                        imgSrc={speaker.imgSrc} imgAlt={speaker.imgAlt} webPageLink={speaker.webPageLink}
                        name={speaker.name} description={speaker.description}
                        twitter={speaker.twitter} facebook={speaker.facebook}
                        instagram={speaker.instagram} linkedin={speaker.linkedin}
                    />)
            }
        </div>
    );
};