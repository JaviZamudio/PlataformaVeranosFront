"use client";

import React, { useContext, useEffect, useState } from 'react';
import NewFiltros from '@/components/NewFiltros';
import { HOST } from '@/configs';
import { AuthContext } from '@/contexts/AuthContext';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Button } from '@nextui-org/button';
import GroupInfoModal from '@/components/GroupInfoModal';
import Link from 'next/link';

interface GroupData {
  id_grupo: string;
  clave_materia: number;
  nombre_materia: string;
  area: string;
  area_img: string;
  inscritos: number;
  carreras: string[];
  horario?: string;
  profesor?: string;
  costo?: number;
}

interface Materia {
  clave: string;
  nombre: string;
  carreras: string[];
  grupo?: GroupData;
}

export default function InicioAdmin() {
  const { token } = useContext(AuthContext);
  const [grupos, setGroups] = useState<GroupData[]>([]);
  const [materias, setMaterias] = useState<Materia[]>([]);

  async function fetchData() {
    const resBody = await fetch(`${HOST}/api/admin/materias`, {
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

    setMaterias(resBody.data);
  }

  useEffect(() => {
    token && fetchData();
  }, [token]);

  return (
    <main className="p-4 flex flex-col items-center">
      <NewFiltros />

      <Table aria-label="Example static collection table" className="w-full max-w-6xl mt-4" isStriped >
        <TableHeader>
          <TableColumn>NOMBRE</TableColumn>
          <TableColumn>CLAVE</TableColumn>
          <TableColumn>CARRERAS</TableColumn>
          <TableColumn>GRUPO</TableColumn>
          <TableColumn>INSCRITOS</TableColumn>
          <TableColumn>INFORMACIÓN</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No hay materias para mostrar">
          {materias.map(materia => (
            <TableRow key={materia.clave}>
              <TableCell>{materia.nombre}</TableCell>
              <TableCell>{materia.clave}</TableCell>
              <TableCell>{materia.carreras.join(", ")}</TableCell>
              <TableCell>
                {materia.grupo ?
                  <GroupInfoModal group={materia.grupo}>
                    <Button
                      color="primary"
                      variant="solid"
                      size='md'
                      onPress={() => console.log('Ver grupo', materia.grupo)}
                      startContent={
                        <span className="material-symbols-outlined">info</span>
                      }
                      className='w-36'
                    >
                      Ver Grupo
                    </Button>
                  </GroupInfoModal>
                  :
                  <Button
                    color="primary"
                    variant="flat"
                    size='md'
                    as={Link}
                    href={`/admin/grupos/crear?materia=${materia.clave}`}
                    startContent={
                      <span className="material-symbols-outlined">add_box</span>
                    }
                    className='w-36'
                  >
                    Crear Grupo
                  </Button>
                }
              </TableCell>
              <TableCell>{materia.grupo ? materia.grupo.inscritos : "-"}</TableCell>
              <TableCell>
                {!materia.grupo ?
                  ("-") :
                  materia.grupo.profesor && materia.grupo.horario && materia.grupo.costo ?
                    "Completa" :
                    <Button
                      color="primary"
                      variant="faded"
                      size='md'
                      as={Link}
                      href={`/admin/grupos/editar?materia=${materia.clave}`}
                      startContent={
                        <span className="material-symbols-outlined">edit</span>
                      }
                    >
                      Editar
                    </Button>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main >
  )
}