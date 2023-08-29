'use client'
import { useState, useEffect } from 'react'
import { usePost } from '../../hooks/usePost.hooks'
import { useGet } from '../../hooks/useGet.hooks'

export default function ProductId (
  { params: { id }}:
  {params: { id: string } }
)
{
  const key = process.env.API_URL
  const { dataPost, setBody, loading, error } = usePost( `http://${key}/api/stored/`);
  const { dataGet } = useGet( `http://${key}/api/${id}`); 
  const [inputValue, setInputValue] = useState('');

  if ( !dataGet ) {
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
            dataGet.map( ( item: any ) => {
              return (
                <div key={ item.id } >
                  <section className="img">
                    <img src={ item.image } alt={ item.name } />
                  </section>
                  <h2>{ item.name }</h2>
                  <p>{ item.description }</p>
                  <p>{ item.price }</p>    
                  <p>{ item.sku }</p>
                  <input type="number" value={inputValue} onChange={(event)=> setInputValue(event.target.value) } />  
                  <button onClick={ ()=>{
                        const postData = {
                        id: id,
                        number: Number(inputValue)
                      };
                      setBody(postData);
                  } } >add to cart</button>
                </div>
              )
            } )
          }
        </section>
        <section>
          {
            <h1>{dataPost}</h1>
          }
        </section>
      </div>
    </main>
  )
}
