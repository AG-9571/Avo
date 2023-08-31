import { IconCart, IconLogo } from '../icons/icons'
import { useAppContext } from '../../-Context/app.context'
import { useEffect } from 'react'
import { useGet } from '../../-Hooks/useGet.hooks'
import Link from 'next/link'

export const HeaderComponents = () => {
  const key = process.env.API_URL
  const { CarNum, setCarNum } = useAppContext() 
  const { dataGet } = useGet(`http://${key}/api/stored/`); 
  useEffect( () => {
    setCarNum(dataGet.length)
  }, [dataGet] )
  return (
    <header className=" shadow-lg mt-2 mx-4  border-2 rounded-md heade h-17 px-2 py-2 grid grid-cols-8">
      <section className=" grid grid-cols-2  max-w-5xl col-start-3 col-end-7">
        <div>
          <Link className='flex justify-start items-center w-full' href="http://localhost:3000/">
            <IconLogo className={' h-10 '} />
            <p className="">Avo Store</p>
          </Link>
        </div>
        <div>
          <Link className='flex justify-end items-center w-full' href="http://localhost:3000/stored">
            <IconCart className={' h-10 '} />
            <p className='ml-2' color='' >
              Stored
              <samp > 
                (
                  {
                    CarNum
                  }
                ) 
              </samp> 
            </p>
          </Link>          
        </div>
      </section>
    </header>
  )
}
