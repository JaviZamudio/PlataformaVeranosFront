"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Tarjeta from '@/components/tarjetaMateria';
import NewFiltros from '@/components/NewFiltros';
import NewTarjeta from '@/components/NewTarjeta';


export default function Inicio() {
  const [grupos, setGrupos] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3008/api/grupos');
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa.');
      }
      const responseData = await response.json();
      console.log(responseData);
      setGrupos(responseData);
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

      <main className='flex flex-col w-full items-center p-4'>
        <NewFiltros />

        <section className='grid grid-cols-3 xl:grid-cols-4 max-w-7xl mt-4 gap-6 '>
          {grupos.map((grupo, index) => (
            <NewTarjeta key={index} group={grupo} />
          ))}
        </section>

      </main>
    </>
  )
}