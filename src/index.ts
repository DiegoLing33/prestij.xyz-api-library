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
import { CharacterEquipmentType, CharacterEquipmentRaw, CharacterRoleRaw, CharacterClassRaw, CharacterRaceRaw, CharacterActiveSpecRaw } from "./Characters/CharacterRaw";
import {GetCharacters, SetCharacterMetaText} from "./Characters/Characters";

export {
	StoreDataValue,
	GuildInfo,

	CharacterEquipmentType,
	CharacterEquipmentRaw,
	CharacterRoleRaw,
	CharacterRaceRaw,
	CharacterClassRaw,
	CharacterActiveSpecRaw,

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