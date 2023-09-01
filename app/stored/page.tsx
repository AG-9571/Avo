"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Component } from '../-Componets/v1.componet'
import { IdbExtends } from '../-Interfaces&Types/Idb.interface'
import { useDelete } from '../-Hooks/useDelete.hooks'
import { useGet } from '../-Hooks/useGet.hooks'

export default function Home()
{
  const [data, setData] = useState( [] )
  const key = process.env.API_URL
  const { data: dataDelete, loading, fetchData } = useDelete(`http://${key}/api/stored/`);
  const { dataGet ,GetFetchData } = useGet(`http://${key}/api/stored/`);
  useEffect( () => {
    axios.get( `http://${key}/api/stored/`)
    .then( (response: any) =>{
      setData( response.data.result )
      }).catch( error => setData( error ) )
  }, [] )
  
  const SubTotal = data.reduce((accumulator, currentItem: IdbExtends ) => {
    return accumulator + (currentItem.price * currentItem.addCart);
  }, 0);

  return (
    <main className=" mt-11 grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        {         
          data.length === 0 ? 
            <Component.NotStored />
            :<Component.Stored GetFetchData={GetFetchData} data={dataGet} deleteFetchData={fetchData} />
        }          
      </div>
      <hr className=' bg-gray-700 mt-4 col-start-4 col-end-6' />
      <div className='col-start-3 col-end-7'>
        <section className=' rounded-lg justify-between items-center flex p-4 mb-3 mt-6 border-green-300  border-[1px]' >
          <div>
            <h2 className=' font-semibold text-lg' >Car Product: { data.length }</h2>          
            <h2 className=' font-semibold text-lg' >Sub Total: { SubTotal }</h2>          
          </div>
          <div>
            <button className=' rounded-lg p-2 bg-green-500 text-white hove:bg-yellow-800'>Checkout</button>
          </div>
        </section>        
        <p>{dataDelete}</p>      
      </div>
    </main>
  )
}