import { SearchComponent } from './components/search/search'

export default function Home()
{
  return (
    <main className=" grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        <SearchComponent />
      </div>
    </main>
  )
}
