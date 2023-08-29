import { useState, useEffect } from 'react'

export function useGet(url: string) {
  const [dataGet, setData] = useState([]);

  useEffect( () => {
    fetch( url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    } )
      .then( response => response.json() )
      .then( data => {
        setData( data.result )
      } )
      .catch( error => setData( error ) )
  }, [] )

  return { dataGet };
}