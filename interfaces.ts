// TypeScript interfaces that match the GraphQL input types

export interface AddGameInput {
    game: {
        title: string;
        platform: string[];
    };
}

export interface EditGameInput {
    id: string;
    edits: {
        title?: string;
        platform?: string[];
    };
}

// Additional interfaces for resolver arguments
export interface GameArgs {
    id: string;
}

export interface AuthorArgs {
    id: string;
}

export interface ReviewArgs {
    id: string;
}

export interface DeleteGameArgs {
    id: string;
}