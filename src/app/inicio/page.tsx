"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import NewFiltros from '@/components/NewFiltros';
import NewTarjeta from '@/components/NewTarjeta';
import { HOST } from '@/configs';

interface Grupo {
  clave_materia: number;
  nombre_materia: string;
  area: string;
  area_img: string;
  inscritos: number;
  horario: string;
  carreras: string[];
  profesor: string;
  costo: number | string;
  area_id: number;
}

export default function Inicio() {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [filtros, setFiltros] = useState({
    carrera: null,
    area_id: null,
    claveMateria: null
  });

  async function fetchData() {
    try {
      const resBody = await fetch(`${HOST}/api/grupos`).then(res => res.json());

      console.log('Grupos para el feed: ', resBody);

      if (resBody.code !== "OK") {
        alert('Error al obtener los grupos');
      }

      setGrupos(resBody.data);
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
        <NewFiltros setFiltros={setFiltros} filtros={filtros} />

        <section className='grid grid-cols-3 xl:grid-cols-4 max-w-7xl mt-4 gap-6 '>
          {grupos.map((grupo, index) => {
            console.log('Filtros Area_id: ', filtros.area_id);
            console.log('Grupo Area_id: ', grupo.area_id);
            if (filtros.carrera && grupo.carreras.indexOf(filtros.carrera) === -1) return null;
            if (filtros.area_id && grupo.area_id !== Number(filtros.area_id)) return null;
            if (filtros.claveMateria && grupo.clave_materia !== filtros.claveMateria) return null;


            return <NewTarjeta key={index} group={grupo} />
          })}
        </section>
      </main>
    </>
  )
}