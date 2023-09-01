'use client'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../-Context/app.context'
import { Component } from '../v1.componet'
import { Idb } from '../../-Interfaces&Types/Idb.interface'
import { IComponentProps, IConponentProductFind } from '../../-Interfaces&Types/Icomponets.interface'
import { IconCircle } from '../icons/icons'

import Link from 'next/link'

export const ProductsAll = ( { data }: IComponentProps) : React.ReactElement =>
{
    return(
        <>
            {
            data.map( ( item: Idb ) => {
                return (
                <Link className=' hover:-translate-y-2 pb-4 border-[1px] rounded-md shadow-md ' href={`/product/${item.id}`} key={ item.id } >
                    <section className=" overflow-hidden m-4 border-[1px] rounded-xl">
                        <img src={ item.image } alt={ item.name } />
                    </section>
                    <h2 className=' font-semibold text-lg mx-4' >{ item.name }</h2>
                    <p className='mx-4'>{ item.price }</p>                        
                </Link> )
            })
            }   
        </>
    )
}

export const ProdoductFind = ( { Postdata, data, id,fetchData,GetFetchData,  stored, PostLoading  }: IConponentProductFind ) =>
{
  const { setCarNum } = useAppContext();  
  
  const [inputValue, setInputValue] = useState('');

  async function sendData() {
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
                  <section className="grid gap-4 grid-cols-2 justify-center items-center">
                    <div>
                      <img src={ item.image } alt={ item.name } />
                    </div>
                    <div>
                      <h2 className=' font-semibold text-2xl' >{ item.name }</h2>
                      <p className='mb-2'>{ item.price }</p>
                      <span className=' bg-gray-300 text-white p-1 mt-2' >{ item.sku }</span>
                      <section className=' mt-5 h-9 w-fll flex'>
                        <input className=' w-4/7 border-slate-500 rounded-l-md pl-3 p-1 border-[1px] border-solid'  type="number" value={inputValue} onChange={(event)=> setInputValue(event.target.value) } />                    
                        <button className='flex pr-3 w-3/7  p-2 bg-green-600 items-center border-green-600 border-[1px] text-white  rounded-r-md' onClick={ sendData }>
                            {
                                PostLoading && <IconCircle className='perr animate-spin h-4 mr-2 ' />
                            }                            
                            <p className='text-sm'>Add To Car</p>
                        </button>
                      </section>
                      <p className="mt-2 text-pink-600 text-sm">
                        {
                            Postdata
                        }
                      </p>
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