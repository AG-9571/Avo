export interface IdbProducts
{
    renderAll(): Promise<Object>
    renderFind( id: string ): Promise<Object>
}
