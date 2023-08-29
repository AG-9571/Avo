"use client"
import { SearchComponent } from './components/search/search'
import Link  from 'next/link'
import { useState, useEffect } from 'react'
export default function Home()
{
  const [data, setData] = useState( [] )
  const key = process.env.API_URL
  useEffect( () => {
    fetch( `http://${key}/api/` )
      .then( response => response.json() )
      .then( data => {
        setData( data.result )
      } )
      .catch( error => setData( error ) )
  }, [] )
  
  return (
    <main className=" grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        {
          data.map( ( item: any ) => {
            return (
              <Link href={`/product/${item.id}`} key={ item.id } >
                <section className="img">
                  <img src={ item.image } alt={ item.name } />
                </section>
                <h2>{ item.name }</h2>
                <p>{ item.price }</p>
                <button>add to cart</button>
              </Link>
            )
          })
        }        
      </div>
    </main>
  )
}
