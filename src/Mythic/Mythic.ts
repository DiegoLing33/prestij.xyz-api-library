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


import {CharacterSpec, CharacterSpecType} from "../Characters/Characters";
import {ConfirmRaw, ConfirmRaws, NameRaw, WIDWithNameRaw} from "../Core/Raw";
import {MythicAffixRaw, MythicMemberRaw, MythicRaw} from "./MythicRaw";
import {CreateRequest, LimitResponse} from "../Core/Core";

/**
 * Mythic members
 */
export class MythicMember extends WIDWithNameRaw<MythicMemberRaw> {
	protected __spec!: CharacterSpec;

	constructor(raw: MythicMemberRaw) {
		super(raw);
		this.__spec = new CharacterSpec(this.getRaw().spec);
	}

	/**
	 * Returns the mythic hash
	 */
	public getMythicHash(): string {
		return this.getRaw().mythic_hash;
	}
}

/**
 * Raw affixes
 */
export class MythicAffix extends WIDWithNameRaw<MythicAffixRaw> {
}

/**
 * Mythic data
 */
export class Mythic extends NameRaw<MythicRaw> {
	protected __members!: MythicMember[];
	protected __affixes!: MythicAffix[];

	constructor(raw: MythicRaw) {
		super(raw);
		this.__members = ConfirmRaws(this.getRaw().members, MythicMember);
		this.__affixes = ConfirmRaws(this.getRaw().affixes, MythicAffix);
	}

	/**
	 * Returns the mythic hash
	 */
	public getMythicHash(): string {
		return this.getRaw().mythic_hash;
	}


	/**
	 * Returns the team hash
	 */
	public getTeamHash(): string {
		return this.getRaw().team_hash;
	}


	/**
	 * Returns the affixes hash
	 */
	public getAffixesHash(): string {
		return this.getRaw().affixes_hash;
	}

	/**
	 * Returns the WoW dungeon ID
	 */
	public getWowDungeonID(): number {
		return this.getRaw().wow_dung_id;
	}

	/**
	 * Returns the date time when mythic race was completed
	 */
	public getCompletedDateTime(): Date {
		return new Date(this.getRaw().completed);
	}

	/**
	 * Returns the duration in seconds
	 */
	public getDurationInSeconds(): number {
		return this.getRaw().duration;
	}

	/**
	 * Returns the duration string
	 */
	public getDurationString(): string {
		return this.getRaw().duration_string;
	}

	/**
	 * Returns the members
	 */
	public getMembers(): MythicMember[] {
		return this.__members;
	}

	/**
	 * Returns the affixes
	 */
	public getAffixes(): MythicAffix[] {
		return this.__affixes;
	}

	/**
	 * Returns true, if the mythic race was done in time
	 */
	public isDone(): boolean {
		return this.getRaw().done_in_time;
	}
}

/**
 * Returns the mythic list
 * @param props
 * @constructor
 */
export async function GetMythic(props: { offset?: number, limit?: number } = {}): Promise<LimitResponse<Mythic>> {
	const offset = props.offset || 0;
	const limit = props.limit || 100;

	// Filter
	const data = await CreateRequest<LimitResponse<MythicRaw>>('mythic/list', {offset, limit});
	const items = data.response.items.map(v => ConfirmRaw(v, Mythic));

	return {request: data.request, response: {...data.response, items}};
}