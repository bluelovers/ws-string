export declare const StripTable: RegExp[];
export declare function normalize(input: string, options?: {
    allow_nbsp?: boolean;
    allow_bom?: boolean;
}): string;
export type IOptions = {
    allow_nbsp?: boolean;
    allow_bom?: boolean;
};
export default normalize;
