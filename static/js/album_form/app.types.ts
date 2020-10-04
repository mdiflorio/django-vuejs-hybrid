
export interface Field {
    type: string;
    required: boolean;
    read_only: boolean;
    label: string;
    choices?: Array<FieldChoice>;
}

export interface FieldChoice {
    value: number;
    display_name: string;
}

export interface AlbumFormFields {
    artist: Field,
    name: Field,
    releaseDate: Field,
    numStars: Field
}

export interface Album {
    artist: number;
    name: String;
    releaseDate: string;
    numStars: number;
}