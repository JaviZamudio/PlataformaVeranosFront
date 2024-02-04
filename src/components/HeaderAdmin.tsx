"use client"

import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { AuthContext } from '@/contexts/AuthContext';

export default function AdminHeader() {
  const { token, logout } = useContext(AuthContext);
  return (
    <header className="flex flex-col w-full">
      <div className='relative w-full h-24'>
        <Image src="/images/fondoHeader.png" alt="hero fondo" fill={true} className='w-full h-24 object-cover object-top' />
        <Image src="/images/logoHeader.png" alt="hero" className='h-24 w-auto absolute' width={700} height={70} />
      </div>
      {token &&
        <nav className='w-full h-10 bg-azul-marino flex justify-end px-4'>
          <ul className='h-full items-center'>
            <li className='inline-block'>
              <Button
                variant="light"
                color="primary"
                size="md"
                href='/admin'
                as={Link}
                className='rounded-none text-white'
              >
                Inicio
              </Button>
            </li>
            {/* <li className='inline-block'>
            <Button
              variant="light"
              color="primary"
              size="md"
              href='/solicitud'
              as={Link}
              className='rounded-none text-white'
            >
              Crear Grupo
            </Button>
          </li> */}
            <li className='inline-block'>
              <Button
                variant="light"
                color="danger"
                size="md"
                onPress={logout}
                className='rounded-none text-white'
              >
                Cerrar Sesión
              </Button>
            </li>
          </ul>
        </nav>
      }
    </header>
  )
}