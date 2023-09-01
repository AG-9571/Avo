export interface Idb {
    id: number;
    sku: string;
    name: string;
    image: string;
    price: number;
    attributes: {
        description: string;
        shape: string;
        hardiness: string;
        taste: string;
    };
}

export interface IdbExtends extends Idb {
    addCart : number;
}
