import { TAttributesTableProps } from '../../-Interfaces&Types/Table.type'

export const AttributesTable = ({shape, hardiness, taste }: TAttributesTableProps) =>{
    return(
        <section className='my-10'>              
            <table className="min-w-full bg-white border-2 overflow-hidden rounded-lg border-separate border-spacing-0">
                <thead className="border-[2px]  bg-gray-800  text-white">
                    <tr>
                        <th className="w-1/2 h-11 py-2 px-4 text-left">Attributes</th>                    
                        <th className="w-1/2 py-2 px-4"></th>                    
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    <tr>
                        <td className="w-1/3 py-2 px-4">Shape</td>
                        <td className="w-1/3 py-2 px-4 ">{shape}</td>                
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="w-1/3 py-2 px-4">hardiness</td>
                        <td className="w-1/3 py-2 px-4">{hardiness}</td>                
                    </tr>
                    <tr>
                        <td className="w-1/3 py-2 px-4">taste</td>
                        <td className="w-1/3 py-2 px-4 ">{taste}</td>                
                    </tr>
                </tbody>
            </table>
        </section>
    )
}