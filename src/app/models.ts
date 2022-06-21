export interface IUser {
    id: number;
    username: string;
}

export interface IArtist {
    id: number;
    title: string;
    active: boolean;
    year?: string;
    year_disband?: string;
    formed_in?: string;
    about?: string;
    pic?: string;
    creation_timestamp: string;
}

export interface ISong {
    id: number;
    title: string;
    year?: string;
    about?: string;
    listen_count: number;
    creation_timestamp: string;
    album?: any;
    art?: string;
    artist: string;
}

export interface IScrobble {
    id: number;
    song: string;
    artist: string;
    belongs_to: string;
    timestamp: string;
    art?: string;
}

export interface IToken {
    token: string;
}

export interface ICount {
    count: number;
}

export interface IUpdate {
    id: number;
    title: string;
    timestamp: string;
    markdown: string;
    markdown_rendered: string;
}