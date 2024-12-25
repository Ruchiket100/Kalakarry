

export type UserType = {
    id: string,
    name: string,
    username: string,
    collections: Record<string, string>[],
    email: string,
    collection_count: number,
    following_count: number,
    followers_count: number,
    following: boolean,
    verified: boolean,
    is_artist: boolean,
    birth_date: Date,
    setting_up: boolean
}