"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import NewFiltros from '@/components/NewFiltros';
import NewTarjeta from '@/components/NewTarjeta';
import { HOST } from '@/configs';
import { Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';

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
            if (filtros.carrera && !grupo.carreras.includes(filtros.carrera)) return null;
            if (filtros.area_id && grupo.area_id !== Number(filtros.area_id)) return null;
            if (filtros.claveMateria && grupo.clave_materia.toString().indexOf(filtros.claveMateria) === -1) return null;


            return <NewTarjeta key={index} group={grupo} />
          })}

          {grupos.length > 0 &&
            <Card className='border-dashed border border-black opacity-70' isPressable as={Link} href='/solicitud'>
              <CardBody className=' flex flex-col items-center justify-center'>
                <span className='material-symbols-outlined !text-6xl'>add</span>
                <span className='text-2xl'>Solicitar otra materia</span>
              </CardBody>
            </Card>
          }
        </section>
      </main>
    </>
  )
}