/*
 * ██╗░░░░░██╗███╗░░██╗░██████╗░░░░██████╗░██╗░░░░░░█████╗░░█████╗░██╗░░██╗
 * ██║░░░░░██║████╗░██║██╔════╝░░░░██╔══██╗██║░░░░░██╔══██╗██╔══██╗██║░██╔╝
 * ██║░░░░░██║██╔██╗██║██║░░██╗░░░░██████╦╝██║░░░░░███████║██║░░╚═╝█████═╝░
 * ██║░░░░░██║██║╚████║██║░░╚██╗░░░██╔══██╗██║░░░░░██╔══██║██║░░██╗██╔═██╗░
 * ███████╗██║██║░╚███║╚██████╔╝░░░██████╦╝███████╗██║░░██║╚█████╔╝██║░╚██╗
 * ╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝
 *
 * Developed by Yakov V. Panov (C) Ling • Black 2020
 * @site http://ling.black
 */

export const CoreAPIUrl = 'http://server.prestij.xyz/';

export interface LimitResponse<T> {
	response: {
		items: T[];
		count: number;
	},
	request: {
		limit: number;
		offset: number;
	}
}

/**
 * Creates API request
 *
 * @param path
 * @param data
 * @param method
 * @constructor
 */
export function CreateRequest<ResponseType>(path: string, data: any = {}, method: string = 'GET'): Promise<ResponseType> {
	const args = method === 'GET' ? new URLSearchParams(data) : '';
	return new Promise(async (resolve, reject) => {
		try {
			const ft = await fetch(CoreAPIUrl + path + '?' + args, {
				method,
				body: method !== 'GET' ? JSON.stringify(data) : undefined,
			});
			const json = await ft.json();
			resolve(json);
		} catch (e) {
			reject(e);
		}
	});
}


export interface LimitLoadable<T> {
	(props: { limit?: number, offset?: number }): Promise<LimitResponse<T>>;
}

export interface PerPageHandler {
	(all: number, current: number, tag?: string): void;
}

/**
 * Loads all the pages
 * @param closure
 * @param perPage
 * @param tag
 * @param limit
 * @constructor
 */
export async function GetAll<T>(closure: LimitLoadable<T>, perPage?: PerPageHandler, tag?: string, limit: number = 100): Promise<T[]> {
	let i = 0;

	if (perPage) perPage(0, 0, tag);
	const fr = (await closure({limit, offset: i})).response;
	const maxCount = fr.count;
	const loaded = fr.items;
	if (perPage) perPage(maxCount, loaded.length, tag);

	while (loaded.length < maxCount) {
		const nr = (await closure({limit, offset: (++i) * limit})).response;
		loaded.push(...nr.items)
		if (perPage) perPage(maxCount, loaded.length, tag);
	}
	return loaded;
}

export type WithToken<T> = Partial<T> & { token?: string };