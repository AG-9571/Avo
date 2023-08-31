export function Stored({data}: {data: [] | never[]}) {
    return (
        <>
            {
            data.map( ( item: any ) => {
                return (
                    <div key={ item.id } >
                        <section className="img">
                        <img src={ item.image } alt={ item.name } />
                        </section>
                        <h2>{ item.name }</h2>
                        <p>{ item.price }</p>
                        <p>{ item.addCart }</p>                
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