/* eslint indent: ["error", 4] */
import { IDb } from '../Interfaces/Idb'

export class db<Tdb> implements IDb<Object>
{
    // constructor
    protected constructor() {}
    // find a record by id
    public getfind( database: [] | any, id: string  ): Promise<[]>
    {
        return new Promise( ( resolve, reject ) => {
            try {
                setTimeout( async () => {
                    const result = database.filter( ( product: {id:string} ) => product.id === id )
                    if ( !result ) {
                        return reject(  `No record found for id ${id}`  )
                    }
                    return await resolve( result )
                }, 1000 )
            } catch ( error ) {
                reject( error )
            }
        } )
    }
    // return all records
    public getall( database: Object ): Promise<Object>
    {
        return new Promise( ( resolve, reject ) => {
            try {
                setTimeout( async () => {
                    await resolve( database )
                }, 1000 )
            } catch ( error ) {
                reject( error )
            }
        } )
    }
}
