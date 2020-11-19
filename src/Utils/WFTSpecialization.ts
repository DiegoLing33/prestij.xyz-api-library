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


enum WFTSpecializationRoleId {
	NONE,
	TANK,
	HEALER,
	MILLIE,
	RANGE,
}

/**
 * The specializations roles ids
 * @type{*}
 */
export const SPECIALIZATIONS_ROLES = {
	577: WFTSpecializationRoleId.MILLIE,
	581: WFTSpecializationRoleId.TANK,
	102: WFTSpecializationRoleId.RANGE,
	103: WFTSpecializationRoleId.MILLIE,
	104: WFTSpecializationRoleId.TANK,
	105: WFTSpecializationRoleId.HEALER,
	253: WFTSpecializationRoleId.RANGE,
	254: WFTSpecializationRoleId.RANGE,
	255: WFTSpecializationRoleId.RANGE,
	62: WFTSpecializationRoleId.RANGE,
	63: WFTSpecializationRoleId.RANGE,
	64: WFTSpecializationRoleId.RANGE,
	65: WFTSpecializationRoleId.HEALER,
	66: WFTSpecializationRoleId.TANK,
	70: WFTSpecializationRoleId.MILLIE,
	265: WFTSpecializationRoleId.RANGE,
	266: WFTSpecializationRoleId.RANGE,
	267: WFTSpecializationRoleId.RANGE,
	262: WFTSpecializationRoleId.RANGE,
	263: WFTSpecializationRoleId.RANGE,
	264: WFTSpecializationRoleId.HEALER,
	256: WFTSpecializationRoleId.HEALER,
	257: WFTSpecializationRoleId.HEALER,
	258: WFTSpecializationRoleId.RANGE,
	259: WFTSpecializationRoleId.MILLIE,
	260: WFTSpecializationRoleId.MILLIE,
	261: WFTSpecializationRoleId.MILLIE,
	268: WFTSpecializationRoleId.TANK,
	270: WFTSpecializationRoleId.HEALER,
	269: WFTSpecializationRoleId.MILLIE,
	250: WFTSpecializationRoleId.TANK,
	251: WFTSpecializationRoleId.MILLIE,
	252: WFTSpecializationRoleId.MILLIE,
	71: WFTSpecializationRoleId.MILLIE,
	72: WFTSpecializationRoleId.MILLIE,
	73: WFTSpecializationRoleId.TANK,
	0: WFTSpecializationRoleId.NONE,
};

/**
 * WoW Specialization utils
 */
export default class WFTSpecialization {

	/**
	 * Returns the rus slug by specialization role id
	 * @param id
	 */
	public static getRusRoleSlugById(id: WFTSpecializationRoleId | number) {
		switch (id) {
			default:
			case WFTSpecializationRoleId.NONE:
				return '?';
			case WFTSpecializationRoleId.HEALER:
				return 'Х';
			case WFTSpecializationRoleId.MILLIE:
				return 'МД';
			case WFTSpecializationRoleId.RANGE:
				return 'РД';
			case WFTSpecializationRoleId.TANK:
				return 'Т';
		}
	}

	/**
	 * Returns the roles
	 */
	public static getRoles(): { [key: number]: WFTSpecializationRoleId } {
		return SPECIALIZATIONS_ROLES;
	}

	/**
	 * Returns the specialization role
	 * @param specializationId
	 */
	public static getSpecializationRole(specializationId: number): WFTSpecialization {
		return WFTSpecialization.getRoles()[specializationId];
	}
}