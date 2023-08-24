import data from '../data.json'
import { dbStored } from '../database/dbStored'
import { ICarItem } from './Istored.interface'

export async function GET( require: Request ) {
    try{
        const result =  data.shopping;        

        return new Response( JSON.stringify( { status: "200 OK",  result } ), {
            status: 200,
            headers: { 'content-type': 'application/json' },
        } )
    } catch ( error ) {
          return new Response( JSON.stringify( { error } ), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        } )
    }
}

export async function POST() {
    try{        
        const stored = await new dbStored();        
        const result = await stored.addProduct("6HrdgMkj",1);
        const DATA: any[] = data.shopping        
        const filter =  DATA.filter(item => item.id === "6HrdgMkj")

        if( filter.length === 0 ){
            DATA.push(result[0])
        }
        else{
            DATA.forEach((item: ICarItem) => {
                if (item.id === "6HrdgMkj") {
                    item.addCart += 1;
                }
            });
        }

        return new Response( JSON.stringify( {  result } ), {
            status: 200,
            headers: { 'content-type': 'application/json' },
        } )
    } catch ( error ) {
          return new Response( JSON.stringify( { error } ), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        } )
    }
}

export async function DELETE() {
    try{
        const stored = await new dbStored();        
        const result = await stored.deleteProduct("6HrdgMkj");
    } catch ( error ) {

    }
}