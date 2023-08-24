export interface IDb<Tdb>
{
  getall( database: Tdb ): Promise<Tdb>
  getfind( database: [], id: string ): Promise<Tdb>
}
