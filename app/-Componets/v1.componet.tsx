import { AttributesTable } from './tables/table-v1.component'
import { TAttributesTableProps } from '../-Interfaces&Types/Table.type';
import { ProductsAll , ProdoductFind } from './product/product-v1.component'
import { LoadingHome, LoadingProduct } from './loadings/loadings-v1.component'
import { IConponentProductFind, IComponentProps, IComponentStored  } from '../-Interfaces&Types/Icomponets.interface'
import { Stored , NotStored } from './stored/stored-v1.component'

/** List of components
 * 1. TABLE 
 *    - AttributesTable
 * 2. PRODUCT
 *    - ProductsAll
 *    - ProdoductFind
 * 3. LOADING
 *    - LoadingHome
 * 4. STORED
 *    - Stored
 *    - NotStored
 */

export class Component {    
    // Table
    static AttributesTable ({shape, hardiness, taste }: TAttributesTableProps)
    {
        return(
            <AttributesTable shape={shape} hardiness={hardiness} taste={taste} />
        )
    }
    // Product
    static ProdoductFind ( { Postdata ,data, id,fetchData,GetFetchData,  stored, PostLoading  }: IConponentProductFind ): React.ReactElement
    {
        return(
            <ProdoductFind Postdata={Postdata} data={data} id={id} PostLoading={PostLoading} fetchData={fetchData} GetFetchData={GetFetchData} stored={stored} />
        )
    }
    static ProductsAll ({ data }:IComponentProps): React.ReactElement
    {
        return(
            <ProductsAll data={data} />
        )
    }
    // Loading
    static LoadingHome () {
        return(
            <LoadingHome />
        )
    }
    static LoadingProduct () {
        return(
            <LoadingProduct />
        )
    }
    // Stored
    static NotStored () {
        return (
            <NotStored />
        )
    }    

    static Stored ({data, deleteFetchData, GetFetchData}: IComponentStored ): React.ReactElement {
        return (
            <Stored GetFetchData={GetFetchData} data={data} deleteFetchData={deleteFetchData} />
        )
    }
}