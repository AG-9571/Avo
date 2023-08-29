import { dbProducts } from './database/dbProduct'

export async function GET( require: Request ) {
  const product = new dbProducts()
  const result = await product.renderAll()
  return new Response( JSON.stringify( { message: 'Hello World', result } ), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  } )
}

