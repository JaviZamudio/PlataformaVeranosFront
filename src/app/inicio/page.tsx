"use client";

import React from 'react';
import Header from '@/components/Header';
import Tarjeta from '@/components/tarjetaMateria';
import { Filtros } from '@/components/filtros';


export default function Inicio() {
  return (
    <>
      <Header />

      <main>
        <section className='flex items-center gap-28 p-[80px]'> 
          
          <Filtros/>

        </section>
        <section className='px-20 grid grid-cols-3 gap-x-28 gap-y-10 content-start'>   
      
          <Tarjeta/>

          <Tarjeta/>

          <Tarjeta/>

          <Tarjeta/>

        </section>
      </main>
    </>
  )
}