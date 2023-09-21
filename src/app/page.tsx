'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => console.log('Hola')}>
      Dashboard x
    </button>
  )
}
