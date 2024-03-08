"use client"

import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Divider } from '@nextui-org/react';
import { AuthContext } from '@/contexts/AuthContext';

export default function AdminHeader() {
  const { token, logout } = useContext(AuthContext);
  return (
    <header className="flex flex-col w-full">
      <div className='relative w-full h-24'>
        <Image src="/images/fondoHeader.png" alt="hero fondo" fill={true} className='w-full h-24 object-cover object-top' priority />
        <Image src="/images/logoHeader.png" alt="hero" className='h-24 w-auto absolute' width={700} height={70} />
      </div>
      {token &&
        <nav className='w-full bg-azul-marino flex justify-end px-4 items-center'>
          <Button
            variant="light"
            color="primary"
            size="md"
            href='/admin'
            as={Link}
            className='rounded-none text-white gap-1'
            startContent={
              <span className="material-symbols-outlined !text-xl">home</span>
            }
          >
            Inicio
          </Button>
          <Divider orientation='vertical' className='h-6 bg-content3' />
          <Button
            variant="light"
            color="primary"
            size="md"
            href='/admin/grupos/crear'
            as={Link}
            className='rounded-none text-white gap-1'
            startContent={
              <span className="material-symbols-outlined">add</span>
            }
          >
            Crear Grupo
          </Button>
          <Divider orientation='vertical' className='h-6 bg-content3' />
          <Button
            variant="light"
            color="danger"
            size="md"
            onPress={logout}
            className='rounded-none text-white gap-1'
            startContent={
              <span className="material-symbols-outlined !text-xl">logout</span>
            }
          >
            Cerrar Sesión
          </Button>
        </nav>
      }
    </header>
  )
}