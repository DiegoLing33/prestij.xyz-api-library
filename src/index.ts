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
import {GetCharacter, GetCharacters, SetCharacterMetaText} from "./Characters/Characters";
import {CharacterEquipment, CharacterEquipmentItem } from "./Characters/CharacterEquipment";
import {ConfirmRaw, ConfirmRaws } from "./Core/Raw";
import {GetMythic, Mythic, MythicAffix, MythicMember} from "./Mythic/Mythic";

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

	CharacterEquipmentItem,
	CharacterEquipment,

	Mythic,
	MythicMember,
	MythicAffix,

	ConfirmRaw,
	ConfirmRaws,
}

export const GuildAPI = {
	CreateRequest,
	GetGuild,
	GetGuildObject,
	GetCharacters,
	GetCharacter,
	GetAll,
	SetCharacterMetaText,
	GetMythic,
};