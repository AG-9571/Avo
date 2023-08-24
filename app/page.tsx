import { SearchComponent } from './components/search/search'
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
      </div>
    </main>
  )
}
