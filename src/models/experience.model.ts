import type { Technologie } from "./technonlogie.model";

export interface Experience {
    title: string;
    description: string;
    enterprise: string;
    technologies: Technologie[]
}