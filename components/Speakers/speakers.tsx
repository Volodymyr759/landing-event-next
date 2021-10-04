import { SpeakersProps } from './speakers.props';
import { SpeakerCard } from '../SpeakerCard/speaker-card';

export const SpeakerList = ({ speakers }: SpeakersProps): JSX.Element => {
    return (
        <div className="row">
            {speakers.map(speaker => <SpeakerCard key={speaker.name} speaker={speaker} />)}
        </div>
    );
};