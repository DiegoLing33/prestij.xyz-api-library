
export interface CharacterCoreRaw{
    wow_id: number;
    name: string;
}


export type CharacterEquipmentType = "HEAD" | "NECK" | "SHOULDER" | "CHEST" | "WAIST" | "LEGS" | "FEET"
    | "WRIST" | "HANDS" | "FINGER_1" | "FINGER_2" | "TRINKET_1" | "TRINKET_2"
    | "BACK" | "MAIN_HAND" | "OFF_HAND" | "TABARD";

export interface CharacterEquipmentRaw {
    wow_id: number;
    character_id: number;
    image_id: number | null;

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

export interface CharacterRoleRaw {
    role_index: number;
    title: string;
}

export interface CharacterRaceRaw {
    wow_id: number;
    title: string;
}

export interface CharacterClassRaw {
    wow_id: number;
    title: string;
}

export interface CharacterActiveSpecRaw {
    wow_id: number;
    title: string;
    type: number;
}

export interface CharacterRaw extends CharacterCoreRaw{
    gender: string;
    level: number;
    faction: string;
    gear: number;

    guild_role: number;
    meta_text: string;

    role: CharacterRoleRaw;
    character_race: CharacterRaceRaw;
    character_class: CharacterClassRaw;
    character_spec: CharacterActiveSpecRaw;

    realm_id: number;
    guild_id: number;

    equipment: CharacterEquipmentRaw[];
}