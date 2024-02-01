import React from 'react';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-col w-full">
      <div className='relative w-full h-24'>
        <Image src="/images/fondoHeader.png" alt="hero fondo" layout='fill' className='w-full h-24 object-cover object-top' />
        <Image src="/images/logoHeader.png" alt="hero" className='h-24 w-auto absolute' width={1000} height={100} />
      </div>
      <nav className='w-full h-10 bg-azul-marino flex justify-end'>
        <ul className='h-full items-center'>
          <li className='inline-block'>
            <Link href="/inicio">
              <Button variant="text" className='rounded-none text-white'>
                Inicio
              </Button>
            </Link>
          </li>
          <li className='inline-block'>
            <Link href="/solicitud">
              <Button variant="text" className='rounded-none text-white'>
                Solicitar materia
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}