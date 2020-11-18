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
import {ConfirmRaw, Raw, WIDRaw, WIDWithNameRaw} from "../Core/Raw";
import {CharacterEquipment} from "./CharacterEquipment";

export enum CharacterSpecType {
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
export class CharacterGuildRank extends Raw<CharacterRoleRaw> {
	/**
	 * Returns the title
	 */
	public getTitle(): string {
		return this.getRaw().title
	}

	/**
	 * Returns the rank index
	 */
	public getIndex(): number {
		return this.getRaw().role_index;
	}
}

/**
 * The character race
 */
export class CharacterRace extends WIDRaw<CharacterRaceRaw> {
	/**
	 * The character race title
	 */
	public getTitle(): string {
		return this.getRaw().title;
	}
}

/**
 * The character race
 */
export class CharacterClass extends WIDRaw<CharacterClassRaw> {
	/**
	 * The character class title
	 */
	public getTitle(): string {
		return this.getRaw().title;
	}
}


/**
 * The character spec
 */
export class CharacterSpec extends WIDRaw<CharacterActiveSpecRaw> {
	/**
	 * The character spec title
	 */
	public getTitle(): string {
		return this.getRaw().title;
	}

	public getType(): CharacterSpecType {
		return this.getRaw().type;
	}
}


/**
 * The character
 */
export class Character extends WIDWithNameRaw<CharacterRaw> {

	protected readonly __guildRank!: CharacterGuildRank;
	protected readonly __spec!: CharacterSpec;
	protected readonly __race!: CharacterRace;
	protected readonly __class!: CharacterClass;
	protected readonly __equipment!: CharacterEquipment;

	constructor(raw: CharacterRaw) {
		super(raw);
		this.__guildRank = new CharacterGuildRank(this.getRaw().role);
		this.__spec = new CharacterSpec(this.getRaw().character_spec);
		this.__race = new CharacterRace(this.getRaw().character_race);
		this.__class = new CharacterClass(this.getRaw().character_class);

		this.__equipment = new CharacterEquipment(this.getRaw().equipment, this.getGear());
	}

	/**
	 * Returns the gender
	 */
	public getGender(): CharacterGender {
		return this.getRaw().gender as CharacterGender;
	}

	/**
	 * Returns the level
	 */
	public getLevel(): number {
		return this.getRaw().level;
	}

	/**
	 * Returns the faction
	 */
	public getFaction(): string {
		return this.getRaw().faction;
	}

	/**
	 * Returns the character equipment gear
	 */
	public getGear(): number {
		return this.getRaw().gear;
	}

	/**
	 * Creates the object
	 */
	public getGuildRank(): CharacterGuildRank {
		return new CharacterGuildRank(this.getRaw().role);
	}

	/**
	 * Returns the race
	 */
	public getRace(): CharacterRace {
		return this.__race;
	}

	/**
	 * Returns the class
	 */
	public getClass(): CharacterClass {
		return this.__class;
	}

	/**
	 * Returns the active spec object
	 */
	public getActiveSpec(): CharacterSpec {
		return this.__spec;
	}

	/**
	 * Returns the equipment
	 */
	public getEquipment(): CharacterEquipment {
		return this.__equipment;
	}

	/**
	 * Returns the guild role
	 *
	 * It depends which role player selected to guild: TANK, HEALER, MILLIE, RANGE
	 */
	public getGuildRole(): CharacterSpecType {
		return this.getRaw().guild_role;
	}

	/**
	 * Returns the meta text
	 */
	public getMetaText(): string {
		return this.getRaw().meta_text;
	}

	/**
	 * Returns the player activity points
	 */
	public getActivityPoints(): number {
		return this.getRaw().activity;
	}
}

export async function GetCharacter(name: string): Promise<Character> {
	return new Character(await CreateRequest('characters/' + name));
}

/**
 * Returns the characters list
 * @param props
 * @constructor
 */
export async function GetCharacters(props: { offset?: number, limit?: number } = {}): Promise<LimitResponse<Character>> {
	const offset = props.offset || 0;
	const limit = props.limit || 100;

	// Filter
	const data = await CreateRequest<LimitResponse<CharacterRaw>>('characters/', {offset, limit});
	const items = data.response.items.map(v => ConfirmRaw(v, Character));

	return {request: data.request, response: {...data.response, items}};
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