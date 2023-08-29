import { IconCart, IconLogo } from '../icons/icons'

export const HeaderComponents = () => {
  return (
    <header className=" heade h-16 px-2 py-2 grid grid-cols-8">
      <section className=" grid grid-cols-2  max-w-5xl col-start-3 col-end-7">
        <div className=" flex justify-start items-center w-full  ">
          <a className='flex' href="http://localhost:3000/">
            <IconLogo className={' h-10 '} />
            <strong className="">Avo Store</strong>
          </a>
        </div>
        <div className=" flex justify-end items-center w-full">
          <a className='flex' href="http://localhost:3000/stored">
            <IconCart className={' h-10 '} />
            <strong color='' >Stored</strong>
          </a>          
        </div>
      </section>
    </header>
  )
}
