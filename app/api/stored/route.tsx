import data from '../data.json'
import { dbStored } from '../database/dbStored'
import { ICarItem } from '../Interfaces/Istored.interface'

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

export async function POST( require: Request) {     
    try{    
        const body = await require.json();
        const { id, number } = body;
        const stored = await new dbStored();        
        if (!id || !number) {
            return new Response( JSON.stringify( { status: "400", error: 'El ID y el number son requerido '} ), {
                status: 400,
                headers: { 'content-type': 'application/json' },
            } )
        } else if (typeof id !== 'string' || typeof number !== 'number') {
            return new Response( JSON.stringify( { status: "400", error: 'El ID debe ser un string y el number un number' } ), {
                status: 400,
                headers: { 'content-type': 'application/json' },
            } )
        }   
        const result = await stored.addProduct(id , number);
        const DATA: any[] = data.shopping        
        const filter =  DATA.filter(item => item.id === id)

        if( filter.length === 0 ){
            DATA.push(result[0])
        }
        else{
            DATA.forEach((item: ICarItem) => {
                if (item.id === id) {
                    item.addCart += number;
                }
            });
        }
        return new Response( JSON.stringify( { status: "200 OK", result: 'Producto añadido al carrito correctamente'} ), {
            status: 200,
            headers: { 'content-type': 'application/json' }
        } )                    
    } catch ( error: any ) {
        new Error( error )
        return new Response( JSON.stringify( { error } ), {
        status: 500,
        headers: { 'content-type': 'application/json' },
    } )
    }
}

export async function DELETE( require: Request) {
    try{
        const body = await require.json();
        const { id } = body;
        const stored = await new dbStored();        
        const result = await stored.deleteProduct(id);

        if(id === null || id === undefined || id === '') {
            return new Response( JSON.stringify( { status: "400", error: 'El ID es requerido '} ), {
                status: 400,
                headers: { 'content-type': 'application/json' },
            } )
        }        

        return new Response( JSON.stringify( { status: "200 OK" , result: "Item has been successfully removed from your shopping cart." } ), {
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