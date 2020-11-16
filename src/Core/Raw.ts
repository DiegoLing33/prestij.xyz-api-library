/**
 * Raw object
 */
export class Raw<T> {


    public readonly raw: T;

    constructor(raw: T) {
        this.raw = raw;
    }

    /**
     * Returns the raw data
     */
    public getRaw(): T {
        return this.raw;
    }
}

export function ConfirmRaw<T, R>(raw: T, to: new (props: T) => R): R {
    return new to(raw);
}

export function ConfirmRaws<T, R>(raws: T[], to: new (props: T) => R): R[] {
    return raws.map(value => new to(value));
}