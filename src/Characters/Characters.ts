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

import {CreateRequest, LimitResponse} from "../Core/Core";

export type CharacterEquipmentType = "HEAD" | "NECK" | "SHOULDER" | "CHEST" | "WAIST" | "LEGS" | "FEET"
	| "WRIST" | "HANDS" | "FINGER_1" | "FINGER_2" | "TRINKET_1" | "TRINKET_2"
	| "BACK" | "MAIN_HAND" | "OFF_HAND" | "TABARD";

export interface CharacterEquipment {
	wow_id: number;
	character_id: number;
	image_id?: number;

	title: string;

	slot: CharacterEquipmentType;
	inventory_type: string;
	level: number;

	quantity: number;
	quality: number;

	item_class_id: number;
	item_subclass_id: number;

	stats?: string;
}

export interface CharacterRole {
	role_index: number;
	title: string;
}

export interface CharacterRace {
	wow_id: number;
	title: string;
}

export interface CharacterClass {
	role_index: number;
	title: string;
}

export interface CharacterActiveSpec {
	wow_id: number;
	title: string;
	type: number;
}

export interface Character {
	wow_id: number;

	name: string;
	gender: string;
	level: number;
	faction: string;
	gear: number;

	guild_role: number;
	meta_text: string;

	race: CharacterRace;
	role: CharacterRole;
	class: CharacterClass;

	realm_id: number;
	guild_id: number;

	equipment: CharacterEquipment[];
}

/**
 * Returns the characters list
 * @param props
 * @constructor
 */
export async function GetCharacters(props: { offset?: number, limit?: number } = {}): Promise<LimitResponse<Character>> {
	const offset = props.offset || 0;
	const limit = props.limit || 100;

	return CreateRequest('characters/list', {offset, limit});
}

/**
 * Sets the character meta text
 * @param name
 * @param text
 * @constructor
 */
export async function SetCharacterMetaText(name: string, text: string): Promise<Character> {
	const __name = name.substr(0, 1).toUpperCase() + name.substr(1).toLocaleLowerCase();
	return CreateRequest('characters/meta/' + name, {text}, 'PUT');
}