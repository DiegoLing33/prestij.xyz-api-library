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

import {StoreDataValue} from "../StoreData/StoreData";
import {CreateRequest} from "../Core/Core";

export type GuildInfo = [
	StoreDataValue<'gid', number>,
	StoreDataValue<'guild_name', string>,
	StoreDataValue<'faction_type', string>,
	StoreDataValue<'faction_name', string>,
	StoreDataValue<'created_timestamp', number>,
	StoreDataValue<'players', number>,
	StoreDataValue<'crest_emblem_url', string>,
	StoreDataValue<'crest_background_color', string>,
];

export interface GuildInfoObject {
	gid: number;
	guild_name: string;
	faction_type: string;
	faction_name: string;
	created_timestamp: string;
	players: number;
	crest_emblem_url: string;
	crest_background_color: string;
}

/**
 * Returns the guild info
 * @constructor
 */
export function GetGuild(): Promise<GuildInfo> {
	return CreateRequest<GuildInfo>("guild");
}

/**
 * Returns the guild data as object
 * @constructor
 */
export async function GetGuildObject(): Promise<GuildInfoObject> {
	return (await GetGuild()).reduce<any>((obj, o) => obj[o.field] = o.value, {});
}
