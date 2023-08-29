// db of products
import data from '../data.json'
import { db } from './db'
import { IdbProducts } from '../Interfaces/IdbProduct'

export class dbProducts extends db<Object> implements IdbProducts {
  constructor( 

  ) 
  {
    super()
  }
  public async renderAll() {
    const result = await this.getall( data.products )
    return result
  }
  public async renderFind( id: string  ) {
    const result = await this.getfind( data.products, id )
    return result
  }
}
