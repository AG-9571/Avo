'use client'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../-Context/app.context'
import { Component } from '../v1.componet'
import { Idb } from '../../-Interfaces&Types/Idb.interface'

export const ProdoductComponentFind = ( {
  data, 
  id,
  fetchData,
  GetFetchData,  
  stored
}: 
  {
    data : [] | any
    id : React.ReactNode,
    fetchData: (postData: any) => Promise<void>
    GetFetchData: () => Promise<void> | void    
    stored: [] | any
   } ) =>
{
  const { setCarNum } = useAppContext();  
  
  const [inputValue, setInputValue] = useState('');
  async function sendData()
  {
    const postData = {
      id: id,
      number: Number(inputValue)
    };                      
    await fetchData(postData);
    await GetFetchData()
    await setCarNum(stored.length) 
  }
  useEffect( () => {
    setCarNum(stored.length)
  }, [stored] )
  return  (
    <>
    {
            data.map( ( item: Idb ) => {
              return (
                <div key={ item.id } >
                  <section className="grid grid-cols-2 justify-center items-center">
                    <div>
                      <img src={ item.image } alt={ item.name } />

                    </div>
                    <div>
                      <h2 className=' font-semibold text-2xl' >{ item.name }</h2>
                      <p className='mb-2'>{ item.price }</p>
                      <span className=' bg-gray-300 text-white p-1 mt-2' >{ item.sku }</span>
                      <section className=' mt-2'>
                        <input className=' border-slate-500 rounded-l-md p-1 border-[1px] border-solid'  type="number" value={inputValue} onChange={(event)=> setInputValue(event.target.value) } />                    
                        <button className=' p-1 bg-green-600 border-green-600 border-[1px] text-white  rounded-r-md' onClick={ sendData } >add to cart</button>
                      </section>
                    </div>
                  </section>
                  <section className=' my-2'>
                    <h3 className='font-semibold text-xl mb-2'  >About this avocado</h3>
                    <p>{ item.attributes.description }</p>
                  </section>            
                  <Component.AttributesTable shape={item.attributes.shape} hardiness={item.attributes.hardiness} taste={item.attributes.taste}  />
                </div>
              )
            } )
          }
          </>
        )
      }
