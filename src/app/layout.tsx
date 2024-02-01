import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plataforma Veranos UAQ',
  description: 'Plataforma para la gestión de materias de verano en la UAQ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col w-full min-h-screen'>
        {children}
      </body>
    </html>
  )
}
