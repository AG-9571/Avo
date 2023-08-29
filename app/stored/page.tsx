"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home()
{
  const [data, setData] = useState( [] )
  const key = process.env.API_URL
  useEffect( () => {
    axios.get( `http://${key}/api/stored/`)
    .then( (response: any) =>{
      setData( response.data.result )
      }).catch( error => setData( error ) )

  }, [] )

  return (
    <main className=" grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        {         
          data.length === 0 ? 
            <h2>no hay productos en el carrito</h2> 
          :data.map( ( item: any ) => {
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
          })
        }    
      </div>
      <div>
        <h2>Sub total: { data.length }</h2>
      </div>
    </main>
  )
}