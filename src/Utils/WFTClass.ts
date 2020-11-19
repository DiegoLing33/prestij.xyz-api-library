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

/**
 * The player classes slugs
 * @type {*}
 */
export const PLAYER_CLASS_SLUG = {
	0: "undefined", // Undefined class slug
	1: "war", // War
	2: "paladin", // Paladin
	3: "hunter", // Hunter
	4: "rogue", // Rogue
	5: "priest", // Priest
	6: "dk", // Death Knight
	7: "shaman", // Shaman
	8: "mage", // Mage
	9: "warlock", // Warlock
	10: "monk", // Monk
	11: "druid", // Druid
	12: "dh", // Demon Hunter
};

/**
 * The player class specializations
 */
export const PLAYER_CLASS_SPECIALIZATIONS = {
	0: [],
	1: [71, 72, 73],
	2: [65, 66, 70],
	3: [253, 254, 255],
	4: [259, 260, 261],
	5: [256, 257, 258],
	6: [250, 251, 252],
	7: [262, 263, 264],
	8: [62, 63, 64],
	9: [265, 266, 267],
	10: [268, 269, 270],
	11: [102, 103, 104, 105],
	12: [577, 581],
};

export type WTFClassId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * WoW Class utils
 */
export default class WFTClass {

	/**
	 * Returns the player class slugs
	 */
	public static getSlugsList(): string[] {
		return Object.values(PLAYER_CLASS_SLUG);
	}

	/**
	 * Returns the player class slugs
	 */
	public static getSlugs(): typeof PLAYER_CLASS_SLUG {
		return PLAYER_CLASS_SLUG;
	}

	/**
	 * Returns the slug by id
	 * @param id - class id
	 */
	public static getSlugById(id: WTFClassId): string {
		return WFTClass.getSlugs()[id] || 'undefined';
	}

	/**
	 * Returns all specializations
	 */
	public static getSpecializations() {
		return PLAYER_CLASS_SPECIALIZATIONS;
	}

	/**
	 * Returns the class specializations
	 * @param id - class id
	 */
	public static getClassSpecializations(id: WTFClassId): number[] {
		return WFTClass.getSpecializations()[id];
	}

	/**
	 * Returns true, if class contains specialization
	 * @param id - class id
	 * @param specializationId - spec id
	 */
	public static isClassHashSpecialization(id: WTFClassId, specializationId: number) {
		return WFTClass.getClassSpecializations(id).includes(specializationId);
	}
}
