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

/**
 * Object that contains WID
 *
 * .getWID();
 */
export class WIDRaw<T extends { wow_id: number }> extends Raw<T> {
	/**
	 * Returns the wow id
	 */
	public getWID(): number {
		return this.getRaw().wow_id;
	}
}

/**
 * Object that contains name
 *
 * .getName();
 */
export class NameRaw<T extends { name: string }> extends Raw<T> {
	/**
	 * Returns the name
	 */
	public getName(): string {
		return this.getRaw().name;
	}
}

/**
 * Object that contains WID and name fields
 *
 * .getWID();
 * .getName();
 *
 */
export class WIDWithNameRaw<T extends { wow_id: number, name: string }> extends Raw<T> {
	/**
	 * Returns the name
	 */
	public getName(): string {
		return this.getRaw().name;
	}
}

export class RawWithId<T extends { id: number }> extends Raw<T> {
	/**
	 * Returns the identifier
	 */
	public getId(): number {
		return this.getRaw().id;
	}
}

export function ConfirmRaw<T, R>(raw: T, to: new (props: T) => R): R {
	return new to(raw);
}

export function ConfirmRaws<T, R>(raws: T[], to: new (props: T) => R): R[] {
	return raws.map(value => new to(value));
}