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

import {ConfirmRaws, Raw} from "../Core/Raw";
import {CharacterEquipmentRaw, CharacterEquipmentType} from "./CharacterRaw";

/**
 * Character equipment class
 */
export class CharacterEquipmentItem extends Raw<CharacterEquipmentRaw>{

    /**
     * Returns the wow id
     */
    public getWID(): number{
        return this.getRaw().wow_id;
    }

    /**
     * Returns the owner character id
     */
    public getCharacterWowId(): number{
        return this.getRaw().character_id;
    }

    /**
     * Returns the item image id
     */
    public getImageId(): number | null{
        return this.getRaw().image_id;
    }

    /**
     * Returns the title
     */
    public getTitle(): string{
        return this.getRaw().title;
    }

    /**
     * Returns the equipment slot
     */
    public getSlot(): CharacterEquipmentType{
        return this.getRaw().slot;
    }

    /**
     * Returns the level of the item
     */
    public getLevel(): number{
        return this.getRaw().level;
    }
}

/**
 * The character equipment
 */
export class CharacterEquipment{
    protected items: CharacterEquipmentItem[];
    protected gear: number;

    constructor(items: CharacterEquipmentRaw[], gear: number) {
        this.items = ConfirmRaws(items, CharacterEquipmentItem);
        this.gear = gear;
    }

    /**
     * Returns the character quip. items
     */
    public getItems(): CharacterEquipmentItem[]{
        return this.items;
    }

    /**
     * Returns the gear
     */
    public getGear(): any{
        return this.gear;
    }
}