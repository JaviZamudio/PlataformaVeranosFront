import { Providers } from '@/contexts/Providers'
import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plataforma Veranos UAQ',
  description: 'Plataforma para la gestión de materias de verano en la UAQ',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
      </head>
      <body>
        <Providers>
          <div className='flex flex-col w-full min-h-screen'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
