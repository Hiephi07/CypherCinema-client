export interface IMovieAdmin {
    id?: number | string
    poster: string
    trailer: string
    name: string
    introduce: string,
    classify: string[]
    format: string
    director: string
    actor: string
    genre: string
    premiere: string
    time: number
    language: string
    status: boolean
    date_created: Date
}