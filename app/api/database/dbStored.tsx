import data from '../data.json'
import { db } from './db'
import { dbProducts } from './dbProduct'
import { DbProduct } from '../type/dbproduct.type'

export class dbStored extends db<object>{
    constructor(        
    ){
        super();
    }

    public products: DbProduct[] = [];
    public addCart: number = 0;

    public async addProduct(productsId: string, addcart: number): Promise<DbProduct[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const filter = data.products.filter((product: { id: string }) => product.id === productsId);
                
                if (filter.length === 0 || filter === undefined || filter === null) {                    
                    reject(`No record found for id ${productsId}`);
                }

                const newProduct: DbProduct = {
                    id: filter[0].id,
                    name: filter[0].name,
                    price: filter[0].price,
                    image: filter[0].image,
                    attributes: filter[0].attributes,
                    addCart: addcart
                };

                this.products.push(newProduct);

                resolve(this.products);

            } catch (error) {
                reject(error);
            }
        });
    }

    public deleteProduct(id: string): Promise<DbProduct[]> {
        return new Promise(async (resolve, reject) => {
            try {                 
                data.shopping.forEach((obj: DbProduct, index) => {
                    if (obj.id === id ) {
                        data.shopping.splice(index, 1);
                    }
                });
                resolve(data.shopping);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default dbStored;

