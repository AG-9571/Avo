export interface Idb {
    id: number;
    sku: string;
    name: string;
    image: string;
    price: string;
    attributes: {
        description: string;
        shape: string;
        hardiness: string;
        taste: string;
    };
}