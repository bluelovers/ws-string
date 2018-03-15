declare const runes: ((string: string) => string[]) & {
    substr: (string: string, start: number, width?: number) => string;
} & {
    default: ((string: string) => string[]) & {
        substr: (string: string, start: number, width?: number) => string;
    };
    runes: ((string: string) => string[]) & {
        substr: (string: string, start: number, width?: number) => string;
    };
};
export = runes;
