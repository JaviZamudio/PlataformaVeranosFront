"use client";

import React, { useContext, useEffect, useState } from 'react';
import TarjetaAdmin from '@/components/tarjetaMateriaAdmin';
import AdminHeader from '@/components/HeaderAdmin'
import { Filtros } from '@/components/filtros'
import NewFiltros from '@/components/NewFiltros';
import { HOST } from '@/configs';
import NewTarjetaAdmin from '@/components/NewTarjetaAdmin';
import { AuthContext } from '@/contexts/AuthContext';

interface GroupData {
  id_grupo: string;
  clave_materia: number;
  nombre_materia: string;
  area: string;
  area_img: string;
  inscritos: number;
  horario: string;
  profesor: string;
  costo: number;
  carreras: string[];
}

export default function InicioAdmin() {
  const { token } = useContext(AuthContext);
  const [grupos, setGroups] = useState<GroupData[]>([]);

  async function fetchData() {
    if (!token) {
      console.log('No hay token');
      return;
    }

    const resBody = await fetch(`${HOST}/api/admin/groups`, {
      method: 'GET',
      headers: {
        'Authorization': token || ''
      }
    }).then(res => res.json());

    console.log('resBody', resBody);

    if (resBody.code !== "OK") {
      console.error('Error en la solicitud: ', resBody);
      return;
    }

    setGroups(resBody.data);
  }

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <main className="p-4 flex flex-col items-center">
      <NewFiltros />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {grupos.map((grupo, i) => {
          return <NewTarjetaAdmin key={i} group={grupo} />
        })}
      </div>
    </main >
  )
}