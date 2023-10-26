"use client";

import React from 'react';
import TarjetaAdmin from '@/components/tarjetaMateriaAdmin';
import Header from '@/components/HeaderAdmin'
import { Filtros } from '@/components/filtros'


export default function InicioAdmin() {
  return (
    <>
      {/* Encabezado con logo de facultad y botones */}

      <Header />

      <main>
        { /* Seccion de filtros */}
        <section className='flex items-center gap-28 p-[80px]'>
          <Filtros />
        </section>
        <section className='relative px-20 mb-3 grid grid-cols-3 gap-x-24 gap-y-10 content-start'>

          <TarjetaAdmin />

          <TarjetaAdmin />

          <TarjetaAdmin />

          <TarjetaAdmin />

        </section>
      </main >
    </>
  )
}