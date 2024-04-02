


export interface SimpleDigimon{
    id: number,
    name: string,
    href: string,
    image: string,
}

export interface DigimonResponse{
    content: SimpleDigimon[],
    pageable: {
        currentPage: number,
        elementsOnPage: number,
        totalElements: number,
        totalPages: number,
        nextPage: string
    }
}


export interface Digimon {
    id:              number;
    name:            string;
    xAntibody:       boolean;
    images:          Image[];
    levels:          Level[];
    types:           Type[];
    attributes:      Attribute[];
    fields:          Field[];
    releaseDate:     string;
    descriptions:    Description[];
    skills:          Skill[];
    priorEvolutions: Evolution[];
    nextEvolutions:  Evolution[];
}

export interface Attribute {
    id:        number;
    attribute: string;
}

export interface Description {
    origin:      string;
    language:    string;
    description: string;
}

export interface Field {
    id:    number;
    field: string;
    image: string;
}

export interface Image {
    href:        string;
    transparent: boolean;
}

export interface Level {
    id:    number;
    level: string;
}

export interface Evolution {
    id:        number | null;
    digimon:   string;
    condition: string;
    image:     string;
    url:       string;
}

export interface Skill {
    id:          number;
    skill:       string;
    translation: string;
    description: string;
}

export interface Type {
    id:   number;
    type: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toDigimon(json: string): Digimon {
        return JSON.parse(json);
    }

    public static digimonToJson(value: Digimon): string {
        return JSON.stringify(value);
    }
}
