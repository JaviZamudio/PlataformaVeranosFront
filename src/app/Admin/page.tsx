"use client";

import React, { useEffect, useState } from 'react';
import TarjetaAdmin from '@/components/tarjetaMateriaAdmin';
import AdminHeader from '@/components/HeaderAdmin'
import { Filtros } from '@/components/filtros'


export default function InicioAdmin() {

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