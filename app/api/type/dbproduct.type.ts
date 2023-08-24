export type DbProduct = {
    id: string;
    name: string;
    price: number;
    image: string;
    attributes: {
        description: string;
        shape: string;
        hardiness: string;
        taste: string;
    };
    addCart: number;
}