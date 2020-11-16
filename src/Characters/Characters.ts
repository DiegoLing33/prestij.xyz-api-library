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
import {
	CharacterActiveSpecRaw,
	CharacterClassRaw,
	CharacterEquipmentRaw, CharacterEquipmentType,
	CharacterRaceRaw,
	CharacterRaw,
	CharacterRoleRaw
} from "./CharacterRaw";
import {Raw} from "../Core/Raw";

export enum CharacterSpecType{
	NONE,
	TANK,
	HEALER,
	MILLIE,
	RANGE,
}

export type CharacterGender = 'FEMALE' | 'MALE';

/**
 * Character guild rank
 */
export class CharacterGuildRank extends Raw<CharacterRoleRaw>{
	/**
	 * Returns the title
	 */
	public getTitle(): string{
		return this.getRaw().title
	}

	/**
	 * Returns the rank index
	 */
	public getIndex(): number{
		return this.getRaw().role_index;
	}
}

/**
 * The character race
 */
export class CharacterRace extends Raw<CharacterRaceRaw>{
	/**
	 * The character race wow id
	 */
	public getWID(){
		return this.getRaw().wow_id;
	}

	/**
	 * The character race title
	 */
	public getTitle(): string{
		return this.getRaw().title;
	}
}

/**
 * The character race
 */
export class CharacterClass extends Raw<CharacterClassRaw>{
	/**
	 * The character class wow id
	 */
	public getWID(){
		return this.getRaw().wow_id;
	}

	/**
	 * The character class title
	 */
	public getTitle(): string{
		return this.getRaw().title;
	}
}


/**
 * The character spec
 */
export class CharacterSpec extends Raw<CharacterActiveSpecRaw>{
	/**
	 * The character spec wow id
	 */
	public getWID(){
		return this.getRaw().wow_id;
	}

	/**
	 * The character spec title
	 */
	public getTitle(): string{
		return this.getRaw().title;
	}

	public getType(): CharacterSpecType{
		return this.getRaw().type;
	}
}


/**
 * The character
 */
export class Character extends Raw<CharacterRaw>{
	public readonly level: number;
	public readonly faction: string;
	public readonly gear: number;

	public readonly guild_role: number;
	public readonly meta_text: string;

	public readonly role: CharacterRoleRaw;
	public readonly race: CharacterRaceRaw;
	public readonly class: CharacterClassRaw;
	public readonly spec: CharacterClassRaw;

	public readonly equipment: CharacterEquipmentItem[];

	/**
	 * Returns the wow id
	 */
	public getWID(): number{
		return this.getRaw().wow_id;
	}

	/**
	 * Returns the name
	 */
	public getName(): string{
		return this.getRaw().name;
	}

	/**
	 * Returns the gender
	 */
	public getGender(): CharacterGender{
		return this.getRaw().gender as CharacterGender;
	}

	/**
	 * Returns the level
	 */
	public getLevel(): number{
		return this.getRaw().level;
	}

	/**
	 * Returns the character equipment gear
	 */
	public getGear(): number{
		return this.getRaw().gear;
	}
}

/**
 * Returns the characters list
 * @param props
 * @constructor
 */
export async function GetCharacters(props: { offset?: number, limit?: number } = {}): Promise<LimitResponse<CharacterRaw>> {
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
export async function SetCharacterMetaText(name: string, text: string): Promise<CharacterRaw> {
    const __name = name.substr(0, 1).toUpperCase() + name.substr(1).toLocaleLowerCase();
    return CreateRequest('characters/meta/' + __name, {text}, 'PUT');
}