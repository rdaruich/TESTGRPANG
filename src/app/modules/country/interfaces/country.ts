export interface Country {

    capital: string[];
    flag: string;
    name: {
        common: string;
        nativeName?: {
            [key: string]: string;
        };
        official?: string;
    };
    population: number;
}
