export interface IUser {
    id: number;
    username: string;
}

export interface IArtist {
    id: number;
    title: string;
    cover?: string;
}

export interface ISong {
    id: number;
    title: string;
    about: string;
}

export interface IScrobble {
    id: number;
    song: string;
    artist: string;
    belongs_to: number;
    timestamp: string;
}

export interface IToken {
    token: string;
}