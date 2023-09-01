import { IComponentStored } from '../../-Interfaces&Types/Icomponets.interface'
import { IdbExtends } from '../../-Interfaces&Types/Idb.interface'
import { useAppContext } from '../../-Context/app.context'

export function Stored({data, deleteFetchData, GetFetchData}: IComponentStored) {
    const { setCarNum } = useAppContext();
    return (
        <>
            {
            data.map( ( item: IdbExtends ) => {
                return (
                    <div key={ item.id } className=" mt-5 overflow-hidden p-3 gap-5 border-[1px] border-green-600 rounded-lg flex items-center " >
                        <section className="img w-1/7 h-20 justify-center flex">
                            <img className=" h-full border-2 rounded-md " src={ item.image } alt={ item.name } />
                        </section>
                        <section className=" w-4/6">
                            <h2>{ item.name }</h2>
                            <p>{ item.price } x { item.addCart } </p>                            
                            <p>Some more information goes here....</p>  
                            <p>{item.id}</p>                                   
                        </section>
                        <section className="flex justify-end w-1/6">
                            <button onClick={ async()=>
                                {
                                    await deleteFetchData({id: item.id}) 
                                    await GetFetchData()
                                    await setCarNum(data.length) 
                            }} className="px-4 py-2 border-gray-400 border-2 rounded-md" >X</button>
                        </section>
                    </div>
                    )
                })
            }
        </>
    )
}

export const NotStored = () => {
    return (
        <section className=' rounded-md p-4 bg-green-300 border-green-400 border-[1px] shadow-lg w-full'>
            <h4 className='text-xl font-semibold text-green-700'> Your cart is empty</h4>
            <p className='text-green-700'>You will need to add some items to the cart before you can checkout.</p>
        </section>
    )
}