import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ISpeaker } from "../../infrastructure/interfaces/speaker.interface";

export interface SpeakerCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    speaker: ISpeaker;
}