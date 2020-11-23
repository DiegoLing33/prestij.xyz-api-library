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

import {ConfirmRaw, Raw, RawWithId} from "../Core/Raw";
import {CreateRequest} from "../Core/Core";

export interface BlizzardUserRawBase {
	blizzard_name: string;
}

export interface BlizzardUserRawCreate extends BlizzardUserRawBase {
	token: string;
}

/**
 * Blizzard user raw
 */
export interface BlizzardUserRaw extends BlizzardUserRawBase {
	id: number;
	blizzard_id: number;
	crated: string;
}

export class BlizzardUser extends RawWithId<BlizzardUserRaw> {
	/**
	 * Returns the blizzard id
	 */
	public getBlizzardId(): number {
		return this.getRaw().blizzard_id;
	}

	/**
	 * Returns the blizzard name
	 */
	public getBlizzardName(): string {
		return this.getRaw().blizzard_name;
	}
}

/**
 * Adds the user
 * @param data
 * @constructor
 */
export async function AddUser(data: BlizzardUserRawCreate): Promise<BlizzardUser> {
	return ConfirmRaw(
		await CreateRequest<BlizzardUserRaw>("users", data, "POST"),
		BlizzardUser
	);
}

/**
 * Adds the user
 * @constructor
 */
export async function GetUser(blizzard_id: number): Promise<BlizzardUser> {
	return ConfirmRaw(
		await CreateRequest<BlizzardUserRaw>("users/" + blizzard_id),
		BlizzardUser
	);
}