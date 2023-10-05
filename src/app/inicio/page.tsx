"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Tarjeta from '@/components/tarjetaMateria';
import { Filtros } from '@/components/filtros';


export default function Inicio() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('/ruta');
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa.');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className='flex items-center gap-28 p-[80px]'>

          <Filtros />

        </section>
        <section className='px-20 grid grid-cols-3 gap-x-28 gap-y-10 content-start'>

          <Tarjeta />

          <Tarjeta />

          <Tarjeta />

          <Tarjeta />

        </section>
      </main>
    </>
  )
}