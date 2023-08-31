
export const LoadingHome = () =>{
    return(
        <>
            {
                Array(4).fill(0).map( ( index) => {
                    return (                        
                        <section key={index}  className=" animate-pulse border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">            
                            <div className="">
                                <div className="ml-0 rounded-md bg-slate-700 mb-6 h-56 w-full"></div>
                                <div className="ml-0 pl-0">
                                    <div className="h-2 mb-3 w-full bg-slate-700 rounded"></div>                    
                                    <div className="h-2 w-1/3 bg-slate-700 rounded"></div>                    
                                </div>                
                            </div>       
                        </section>
                    )
                } )
            }            
        </>
    )
}