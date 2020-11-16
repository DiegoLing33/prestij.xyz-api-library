# Prestij.xyz-api library

## How to install?
`
yarn add prestij.xyz-api
`

## How to use?

### Guild info
- `GuildAPI.GetGuild()` - returns the guild data array

### Characters info
- `GuildAPI.GetCharacters()` - returns the guild characters limited list.
How to work with it? Full syntax:
    ```typescript
    import {GuildAPI} from "prestij.xyz-api";
    
    const myLimit = 10;
    const myOffset = 5;
    
    GuildAPI.GetCharacters({
        limit: myLimit, 
        offset: myOffset
    })
    ```
    Returns the promise of limited response.

### Utilities
- `GuildAPI.GetAll<T>( ... )` - returns all pages via limit/offset. How it works?
    ```typescript
    import {GuildAPI} from "prestij.xyz-api";
    
    const allCharacters = await GuildAPI.GetAll(GuildAPI.GetCharacters);
    ```

## Types

### Equipment type
```typescript
export type CharacterEquipmentType = "HEAD" | "NECK" | "SHOULDER" | "CHEST" | "WAIST" | "LEGS" | "FEET"
	| "WRIST" | "HANDS" | "FINGER_1" | "FINGER_2" | "TRINKET_1" | "TRINKET_2"
	| "BACK" | "MAIN_HAND" | "OFF_HAND" | "TABARD";
```

### Character equipment item
```typescript
export interface CharacterEquipment {
	wow_id: number;
	character_id: number;
	image_id?: number;

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
```

### Character guild role
```typescript
export interface CharacterRole {
	role_index: number;
	title: string;
}
```


### Character race, class and spec
```typescript

export interface CharacterRace {
	wow_id: number;
	title: string;
}

export interface CharacterClass {
	role_index: number;
	title: string;
}

export interface CharacterActiveSpec {
	wow_id: number;
	title: string;
	type: number;
}
```

### Character
```typescript
export interface Character {
	wow_id: number;

	name: string;
	gender: string;
	level: number;
	faction: string;
	gear: number;

	guild_role: number;
	meta_text: string;

	race: CharacterRace;
	role: CharacterRole;
	class: CharacterClass;

	realm_id: number;
	guild_id: number;

	equipment: CharacterEquipment[];
}
```

### Guild data item
```typescript
export interface StoreDataValue<name = string, ValueType=never> {
	field: name;
	value: ValueType;
	id: number;
}
```

###Guild data
```typescript
export type GuildInfo = [
	StoreDataValue<'gid', number>,
	StoreDataValue<'guild_name', string>,
	StoreDataValue<'faction_type', string>,
	StoreDataValue<'faction_name', string>,
	StoreDataValue<'created_timestamp', number>,
	StoreDataValue<'players', number>,
	StoreDataValue<'crest_emblem_url', string>,
	StoreDataValue<'crest_background_color', string>,
];
```