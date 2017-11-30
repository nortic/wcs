export interface IEvent {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    earlyPrice: number;
    latePrice: number;
    onSpotPrice: number;
    location?: {
        country: string;
        city: string;
    },
    siteUrl?: string;
    lessons?: ILesson[];
}

export interface ILesson {
    id: number;
    theme: string,
    room?: string;
    level: number;
    teachers: string;
    description: string;
}