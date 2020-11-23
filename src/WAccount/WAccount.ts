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

import {ConfirmRaws, WIDWithNameRaw} from "../Core/Raw";
import {CreateRequest} from "../Core/Core";
import {Character} from "../Characters/Characters";

export interface WAccountRaw {
	wow_id: number;
	name: string;
	realm_id: number;
	realm_title: string;
	level: number;
	faction: string;
	user_id: number;
	id: number;
}

export class WAccount extends WIDWithNameRaw<WAccountRaw> {
	public getRealmId(): number {
		return this.getRaw().realm_id;
	}

	public getRealmTitle(): string {
		return this.getRaw().realm_title;
	}

	public getUserId(): number {
		return this.getRaw().user_id;
	}

	public getFaction(): string {
		return this.getRaw().faction;
	}

	public getLevel(): number {
		return this.getRaw().level;
	}
}

export async function GetWAccounts(blizzard_id: number, token: string): Promise<WAccount[]> {
	return ConfirmRaws(await CreateRequest<WAccountRaw[]>('users/accounts/' + blizzard_id, {token}), WAccount);
}