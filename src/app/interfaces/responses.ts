export interface PokenAPIResponse {
    count:    number;
    results:  Pokemon[];
}

export interface Pokemon {
    name: string;
    url:  string;
}
