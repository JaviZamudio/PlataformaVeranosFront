"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Tarjeta from '@/components/tarjetaMateria';
import NewFiltros from '@/components/NewFiltros';


export default function Inicio() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3008/api/grupos');
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa.');
      }
      const responseData = await response.json();
      console.log(responseData);
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

      <main className='flex flex-col w-full'>
        {/* <section className='flex items-center justify-around mt-8'>
          <Filtros />
        </section> */}

        <NewFiltros />

        <section className='px-20 grid grid-cols-3 gap-x-24 gap-y-10 content-start'>
          {data.map((grupo, index) => (
            <Tarjeta key={index} grupo={grupo} />
          ))}
        </section>
      </main>
    </>
  )
}