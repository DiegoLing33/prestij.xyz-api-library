
export interface MythicRawMemberData{
    
}

export interface MythicRawData{
    wow_dung_id: number;
    name: string;

    // Done info
    completed: number;
    duration: number;
    duration_string: string;
    done_in_time: boolean;

    mythic_hash: string;
    team_hash: string;
    affixes_hash: string;
}