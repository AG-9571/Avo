export interface IComponentProps{
    data :  [] | never[] 
}

export interface IConponentProductFind extends IComponentProps {          
    id : React.ReactNode
    fetchData: (postData: any) => Promise<void>
    GetFetchData: () => Promise<void> | void    
    stored: [] | any   
    PostLoading: boolean
    Postdata : []| never[]
}