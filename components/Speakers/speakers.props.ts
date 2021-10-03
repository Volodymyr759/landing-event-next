import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ISpeaker } from "../../infrastructure/interfaces/speaker.interface";

export interface SpeakersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    speakers: ISpeaker[];
}