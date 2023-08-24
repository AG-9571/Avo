import { exec } from "child_process";
import { dbStored } from "../../../../app/api/database/dbStored";
interface CarItem {
    id: string;
    addCart: number;
}
describe("dbStored", () => {
    it("should return sum of the addCart in the object ",()=>{
        const stored = new dbStored()
        const result =  stored.addProduct("6HrdgMkj",2);
        const result3 =  stored.addProduct("6HrdgMkj",1);
        const result2 =  stored.addProduct("6trfgkkj",2);
        result.then((res)=>{
            const temp: Record<string, CarItem> = {};
            res.forEach(item => {
                if (temp[item.id]) {
                    temp[item.id].addCart += item.addCart;
                } else {
                    temp[item.id] = { ...item };
                }
            });
            const datosCombinados: CarItem[] = Object.values(temp);            
            expect(datosCombinados.length).toBe(2);
            expect(datosCombinados[0].addCart).toBe(3);
        });
    });
    it("should return an object whith id, name, attributes, prices, image", () => {
        const stored = new dbStored();
        const result = stored.addProduct("6HrdgMkj", 2);
        result.then((res) => {            
            expect(res.every((item :any)=> 
                typeof item.name === 'string' && 
                typeof item.id === 'string' &&
                typeof item.price === 'number' &&
                typeof item.image === 'string' &&
                typeof item.attributes === "object"&&
                typeof item.attributes.description === "string"&&
                typeof item.attributes.shape === "string"&&
                typeof item.attributes.hardiness === "string"&&
                typeof item.attributes.taste === "string"&&
                typeof item.addCart === "number"
            )).toBeTruthy();
        });
    });
    it("should delete an object generate",()=>{
        const stored = new dbStored()
        const result =  stored.addProduct("6HrdgMkj",2);
        const result3 =  stored.addProduct("6HrdgMkj",1); 
    });
});

