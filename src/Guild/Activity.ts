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

import {ConfirmRaw, ConfirmRaws, Raw, WIDWithNameRaw} from "../Core/Raw";
import {CreateRequest} from "../Core/Core";

/**
 * Activity player raw
 */
export interface ActivityPlayerRaw {
	name: string;
	wow_id: number;
	activity: number;
	activity_points: number;
}

/**
 * Activity response
 */
export interface ActivityRaw {
	max_activity: number;
	max_player: ActivityPlayerRaw;
	players: ActivityPlayerRaw[];
}

export class ActivityPlayer extends WIDWithNameRaw<ActivityPlayerRaw> {

	/**
	 * Returns the activity
	 */
	public getActivity(): number {
		return this.getRaw().activity;
	}

	/**
	 * Returns the activity points
	 */
	public getActivityPoints(): number {
		return this.getRaw().activity_points;
	}

}

/**
 * Activity points
 */
export class Activity extends Raw<ActivityRaw> {
	protected __maxPlayer!: ActivityPlayer;
	protected __players!: ActivityPlayer[];

	constructor(props: ActivityRaw) {
		super(props);
		this.__maxPlayer = ConfirmRaw(props.max_player, ActivityPlayer);
		this.__players = ConfirmRaws(props.players, ActivityPlayer);
	}

	/**
	 * Returns the players
	 */
	public getPlayers(): ActivityPlayer[] {
		return this.__players;
	}

	/**
	 * Returns the max active player
	 */
	public getMaxActivePlayer(): ActivityPlayer {
		return this.__maxPlayer;
	}

	/**
	 * Returns the max activity points
	 */
	public getMaxActivityPoints(): number {
		return this.getRaw().max_activity;
	}

}

/**
 * Returns the activity
 * @constructor
 */
export async function GetActivity(): Promise<Activity> {
	return ConfirmRaw(await CreateRequest<ActivityRaw>("guild/activity"), Activity);
}