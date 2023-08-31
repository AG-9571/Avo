"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Component } from '../-Componets/v1.componet'

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
    <main className=" mt-11 grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        {         
          data.length === 0 ? 
            <Component.NotStored />
          :<Component.Stored data={data} />
        }          
      </div>
      <hr className=' bg-gray-700 mt-4 col-start-4 col-end-6' />
      <div className='col-start-3 col-end-7'>
        <section className=' rounded-lg justify-between items-center flex p-4 mb-3 mt-6 border-green-300  border-[1px]' >
          <div>
            <h2 className=' font-semibold text-lg' >Car Product: { data.length }</h2>          
            <h2 className=' font-semibold text-lg' >Sub Total: { data.length }</h2>          
          </div>
          <div>
            <button className=' rounded-lg p-2 bg-green-500 text-white hove:bg-yellow-800'>Checkout</button>
          </div>
        </section>        
      </div>
    </main>
  )
}