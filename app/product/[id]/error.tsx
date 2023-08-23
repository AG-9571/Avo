'use client'

import { useEffect } from 'react'

export default function Error(
  {
    error,
    reset,
  }:
    {
    error: Error & { digest?: string }
    reset: () => void
    } )
{
  return (
    <section className='grid grid-cols-8'>
      <div className='col-start-3 col-end-7' >
        <h2>Something went wrong!</h2>
        <h3>{ error.message }</h3>
        <button
          onClick={
          // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
        Try again
        </button>
      </div>
    </section>
  )
}
