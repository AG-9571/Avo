'use client'
import { useState, useEffect } from 'react'
import { usePost } from '../../-Hooks/usePost.hooks'
import { useGet } from '../../-Hooks/useGet.hooks'
import { useAppContext } from '../../-Context/app.context'
import { ProdoductComponentFind } from '../../-Componets/product/Products.component'

export default function ProductId (
  { params: { id }}:
  {params: { id: string  } }
)
{
  const key = process.env.API_URL
  const { dataGet:Getproduct, loading: productLoading } = useGet( `http://${key}/api/${id}`); 
  const { dataPost,fetchData,loading, error } = usePost( `http://${key}/api/stored/`);
  const { dataGet:stored, loading: getloading, GetFetchData } = useGet(`http://${key}/api/stored/`);  

  return (
    <main className=" mt-11 grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        <section className="Product">
          <ProdoductComponentFind stored={stored} data={Getproduct} id={id} fetchData={fetchData} GetFetchData={GetFetchData} />          
        </section>
        <section>
          {getloading && <div>Cargando...</div>}
          {
            <h1>{dataPost}</h1>
          }                    
        </section>
      </div>
    </main>
  )
}
