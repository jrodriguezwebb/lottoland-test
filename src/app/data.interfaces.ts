
export interface IDate {
    full: string;
    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;
    dayOfWeek: string;
}

export interface IRank {
    winners: number;
    specialPrize: number;
    prize: number;
}

export interface IOdd {
    rank0: IRank;
    rank1: IRank;
    rank2: IRank;
    rank3: IRank;
    rank8: IRank;
    rank9: IRank;
    rank10: IRank;
    rank4: IRank;
    rank5: IRank;
    rank6: IRank;
    rank11: IRank;
    rank7: IRank;
    rank12: IRank;
}

export interface Ilast {
    nr: number;
    currency: string;
    date: IDate;
    closingDate: string;
    lateClosingDate: string;
    drawingDate: string;
    numbers: number[];
    euroNumbers: number[];
    jackpot: number;
    marketingJackpot: number;
    specialMarketingJackpot: number;
    climbedSince: number;
    Winners: number;
    odds: IOdd;
}

export type INext = Omit<Ilast, 'numbers' | 'euroNumbers' | 'Winners' | 'odds' >;

export interface IEuroJackPotResults {
    last: Ilast;
    next: INext;
}

export interface IDot {
    number: number;
    extra: boolean;
}

export interface IAppModel {
    date: string;
    numbers: IDot[];
    odds: IRank[];
}
