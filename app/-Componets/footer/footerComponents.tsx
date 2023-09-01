import { IconCart, IconLogo } from '../icons/icons'
import  Link  from 'next/link'

export const FooterComponents = () => {
  return (
    <footer className=" bg-gray-100 border-t-2 grid grid-cols-8">
      <section className=" mt-12  mb-6 p-2 w-full grid grid-cols-3  max-w-5xl col-start-3 col-end-7">
        <div>
          <h4 className=' w-full font-semibold text-lg'>Nosotros</h4>
          <Link className=' hover:text-red-500'  href = '/nosotros'>
            Conoce más
          </Link>
        </div>
        <div className=' text-center'>
          <h4 className=' w-full font-semibold text-lg'>Servicios</h4>
          <Link className=' hover:text-red-500'  href = 'http://localhost:3000/'>
            Todos los productos
          </Link>          
        </div>
        <div className=' text-right'>
          <h4 className=' w-full font-semibold text-lg'>Hecho para</h4>
          <p className=' hover:text-red-500' >
            Platzi y su curso de Next.JS de Platzi dictado por @jonalvarezz
          </p>
          <div className=' flex mt-2'>
            <p>
              <Link href="">Twitwe</Link>
            </p>
            <p>
              <Link href="">github</Link>
            </p>
        </div>
          </div>
      </section>
      <section className=' mb-5 col-start-3 col-end-7'>
        <h4 className='text-center w-full'>Icons made by Freepik from www.flaticon.com Avocado images taken from Avocado 101 at California Avocado</h4>
      </section>
    </footer>
  )
}
