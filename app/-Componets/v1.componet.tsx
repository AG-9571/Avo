import { AttributesTable } from './tables/table-v1.component'
import { TAttributesTableProps } from '../-Interfaces&Types/Table.type';
import { TProductAll } from '../-Interfaces&Types/TProducts.type'
import { ProductsAll } from './product/product-v1.component'
import { LoadingHome } from './loadings/loadings-v1.component'
import { Stored , NotStored } from './stored/stored-v1.component'

export class Component {
    static AttributesTable ({shape, hardiness, taste }: TAttributesTableProps)
    {
        return(
            <AttributesTable shape={shape} hardiness={hardiness} taste={taste} />
        )
    }
    static ProdoductFind ()
    {
        
    }
    static ProductsAll ({ data }:TProductAll): React.ReactElement
    {
        return(
            <ProductsAll data={data} />
        )
    }

    static LoadingHome () {
        return(
            <LoadingHome />
        )
    }

    static NotStored () {
        return (
            <NotStored />
        )
    }

    static Stored ({data}: TProductAll) {
        return (
            <Stored data={data} />
        )
    }
}