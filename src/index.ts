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

import {CreateRequest, GetAll, LimitLoadable, PerPageHandler} from "./Core/Core";
import {GetGuild, GetGuildObject, GuildInfo} from "./Guild/Guild";
import {StoreDataValue} from "./StoreData/StoreData";
import {
	CharacterActiveSpec, CharacterClass, CharacterEquipment,
	CharacterEquipmentType,
	CharacterRace, CharacterRole, GetCharacters, SetCharacterMetaText
} from "./Characters/Characters";

export {
	StoreDataValue,
	GuildInfo,

	CharacterEquipmentType,
	CharacterEquipment,
	CharacterRole,
	CharacterRace,
	CharacterClass,
	CharacterActiveSpec,

	LimitLoadable,
	PerPageHandler,
}

export const GuildAPI = {
	CreateRequest,
	GetGuild,
	GetGuildObject,
	GetCharacters,
	GetAll,
	SetCharacterMetaText,
};