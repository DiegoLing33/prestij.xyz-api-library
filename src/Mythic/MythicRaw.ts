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

import {CharacterActiveSpecRaw} from "../Characters/CharacterRaw";


/**
 * Raw mythic members
 */
export interface MythicMemberRaw {
	wow_id: number;
	name: string;
	spec: CharacterActiveSpecRaw;
	mythic_hash: string;
	from_guild: boolean;
}

/**
 * Raw affixes
 */
export interface MythicAffixRaw {
	wow_id: number;
	name: string;
}

/**
 * Raw mythic data
 */
export interface MythicRaw {
	mythic_hash: string;
	team_hash: string;
	affixes_hash: string;

	guild_race: 0 | 1 | 2 | 3 | 4 | 5,

	wow_dung_id: number;
	name: string;
	completed: number;
	duration: number;
	duration_string: string;
	done_in_time: boolean;

	level: number;

	members: MythicMemberRaw[];
	affixes: MythicAffixRaw[];
}