import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

export default function Header() {
  return (
    <header className="flex flex-col w-full">
      <div className='relative w-full h-24'>
        <Image src="/images/fondoHeader.png" alt="hero fondo" fill={true} className='w-full h-24 object-cover object-top' />
        <Image src="/images/logoHeader.png" alt="hero" className='h-24 w-auto absolute' width={700} height={70} />
      </div>
      <nav className='w-full h-10 bg-azul-marino flex justify-end px-4'>
        <ul className='h-full items-center'>
          <li className='inline-block'>
            <Button
              variant="light"
              color="primary"
              size="md"
              href='/inicio'
              as={Link}
              className='rounded-none text-white'
            >
              Inicio
            </Button>
          </li>
          <li className='inline-block'>
            <Button
              variant="light"
              color="primary"
              size="md"
              href='/solicitud'
              as={Link}
              className='rounded-none text-white'
            >
              Solicitar materia
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}