export type Driver = {
    code: string;
    dateOfBirth: string;
    familyName: string;
    givenName: string;
    mugshotUrl: string;
    nationality: Nationality;
    permanentNumber: string;
    team: Team;
    url?: string;
};

export type GrandPrix = {
    id: string;
    laps: number;
    name: string;
    location: {
        nationality: Nationality;
        circuit: string;
    };
};

export type Team = {
    carImageUrl?: string;
    iconUrl?: string;
    id: string;
    name: string;
    nationality?: Nationality;
};

export type Nationality = {
    code: string;
    iconUrl: string;
    name: string;
};

export type RaceResult = {
    dateStart: string;
    dateEnd: string;
    grandPrix: GrandPrix;
    positions: {
        [position: number]: {
            driver: Driver;
            team: Team;
            points: number;
        };
    };
};
