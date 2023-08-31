import {TProductAll} from '../../-Interfaces&Types/TProducts.type'
import { Idb } from '../../-Interfaces&Types/Idb.interface'

import Link from 'next/link'

export const ProductsAll = ( { data }: TProductAll) : React.ReactElement =>
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