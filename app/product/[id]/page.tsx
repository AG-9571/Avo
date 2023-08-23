'use client'
import { useState, useEffect } from 'react'

export default function ProductId (
  { params: { id }}:
  {params: { id: string } }
)
{
  const [data, setData] = useState( [] )
  const key = process.env.API_URL
  useEffect( () => {
    fetch( `http://${key}/api/${id}` )
      .then( response => response.json() )
      .then( data => {
        setData( data.result )
      } )
      .catch( error => setData( error ) )
  }, [id, key] )
  if ( !data ) {
    return (
      <section className="grid grid-cols-8">
        <div className="col-start-3 col-end-7">
          <h2>Loading...</h2>
        </div>
      </section>
    )
  }
  return (
    <main className=" grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        <section className="Product">
          {
            data.map( ( item: any ) => {
              return (
                <div key={ item.id } >
                  <section className="img">
                    <img src={ item.image } alt={ item.name } />
                  </section>
                  <h2>{ item.name }</h2>
                  <p>{ item.price }</p>
                  <button>add to cart</button>
                </div>
              )
            } )
          }
        </section>
      </div>
    </main>
  )
}
