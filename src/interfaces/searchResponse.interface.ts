export interface SearchResponse {
    author: Author;
    categories: string[];
    items: Item[];
}

export interface Author {
    name: string;
    lastname: string;
}

export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
}

export interface Price {
    currency: string;
    amount: number;
    decimals: number;
}