import { User } from "firebase/auth";

export type TAuthState = User | null
export type TPilotOrUndefined = IPilot | undefined;
export type TFilmOrUndefined = IFilmCard | undefined;

export interface IDataState {
    data: IData,
    status: "idle" | "loading" | "succeeded" | "failed"
    error: null | string | undefined,
};

export type AuthState = User | null;

export interface IFilmCard {
    title: string,
    episode: string,
    imgUrl: string,
    id: string,
}

export interface IPilot {
    name: string,
    imgUrl: string,
    id: string,
};

export interface IData {
    count: number,
    next: string | null,
    previous: string | null,
    results: IStarship[]
}

//https://github.com/amitmtrn/swapi-ts/blob/main/src/SWApi.ts
export interface IStarship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[] | IFilm[];
    pilots: string[] | IPeople[];
    starship_class: string;
    url: string;
}

export interface IVehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[] | IPeople[];
    films: string[] | IFilm[];
    url: string;
    vehicle_class: string;
}

export interface ISpecie {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: Date;
    designation: string;
    edited: Date;
    eye_colors: string;
    hair_colors: string;
    homeworld: string | IPlanet;
    language: string;
    name: string;
    people: string[] | IPeople[];
    films: string[] | IFilm[];
    skin_colors: string;
    url: string;
}

export interface IPlanet {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: string[] | IFilm[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[] | IPeople[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}
export interface IPeople {
    birth_year: string;
    eye_color: string;
    films: string[] | IFilm[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string | IPlanet;
    mass: string;
    name: string;
    skin_color: string;
    created: Date;
    edited: Date;
    species: string[] | ISpecie[];
    starships: string[] | IStarship[];
    url: string;
    vehicles: string[] | IVehicle[];
}
export interface IFilm {
    characters: string[] | IPeople[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[] | IPlanet[];
    producer: string;
    release_date: Date;
    species: string[] | ISpecie[];
    starships: string[] | IStarship[];
    title: string;
    url: string;
    vehicles: string[] | IVehicle[];
}