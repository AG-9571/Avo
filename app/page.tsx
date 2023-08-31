"use client"
import Link  from 'next/link'
import { Component } from './-Componets/v1.componet'
import { useState, useEffect } from 'react'
import { useGet } from './-Hooks/useGet.hooks'
import { IconLogo } from './-Componets/icons/icons'

export default function Home()
{  
  const key = process.env.API_URL
  const {dataGet, loading} = useGet( `http://${key}/api/` )  
  
  return (
    <main className=" mb-10 grid grid-cols-8">
      <section className=' flex h-32 justify-center items-center  col-start-3 col-end-7' >
        <span className='text-4xl font-semibold' >Avo</span>
        <IconLogo className={' animate-avo h-12 '} />
        <span className='text-4xl font-semibold'>Stored</span>
      </section>
      <section className=" mt-10 grid grid-cols-2 gap-8 col-start-3 col-end-7">
        {
          loading && <Component.LoadingHome />
        }
        <Component.ProductsAll data={dataGet} />        
      </section>
    </main>
  )
}
