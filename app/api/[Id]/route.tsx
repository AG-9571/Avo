import data from '../data.json'
import { dbProducts } from '../database/dbProduct'

export async function GET( require: Request )
{
  const path2 = await require.url.split( 'api/' )[1]
  const id = await path2.split( '?' )[0]

  const product = new dbProducts( )
  const result = await product.renderFind( id )
    .then( res => {
      return res
    } )
    .catch( err => {
      return err
    } )

  return new Response( JSON.stringify( { result } ), {
    headers: { 'content-type': 'application/json' },
  } )
}
