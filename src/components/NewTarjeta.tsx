/**
import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Dialog,
} from "@material-tailwind/react";
import Link from 'next/link';

interface GroupData {
  clave_materia: number;
  nombre_materia: string;
  area: string;
  horario: string;
  profesor: string;
  costo: number;
}

interface TarjetaProps {
  grupo: GroupData;
}

const Tarjeta: React.FC<TarjetaProps> = ({grupo}) => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open}
        handler={handleOpen} className=' rounded-xl'>
        <Card className="bg-azul-oscuro overflow-hidden">
          <CardHeader
            color="transparent"
            className="m-0 rounded-none h-[200px] w-full"
          >
            <img
              src="images/Arquitectura de las computadoras.jpg"
              alt="Arquitectura de las computadoras"
            />
          </CardHeader>

          <CardBody className='relative py-[0.5rem] px-[1rem]'>

            <Typography variant="h3" color="white">
              {grupo.nombre_materia}
            </Typography>

            <div className='mt-4'>
              <div className='w-1/2 inline-block'>
                <div className='flex'>
                  <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                    Carreras:
                  </Typography>
                  <Typography variant="lead" color="white" className="mt-2 font-normal">
                    Ingeniería de Software
                  </Typography>
                </div>
                <div className='flex'>
                  <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                    Semestre:
                  </Typography>
                  <Typography variant="lead" color="white" className="mt-2 font-normal">
                    4to
                  </Typography>
                </div>
                <div className='flex'>
                  <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                    Profesor:
                  </Typography>
                  <Typography variant="lead" color="white" className="mt-2 font-normal">
                    {grupo.profesor}
                  </Typography>
                </div>
              </div>
              <div className='w-1/2 inline-block'>
                <div className='flex'>
                  <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold top-0">
                    Clave:
                  </Typography>
                  <Typography variant="lead" color="white" className="mt-2 font-normal top-0">
                    {grupo.clave_materia}
                  </Typography>
                </div>
                <div className='flex'>
                  <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                    Horario:
                  </Typography>
                  <Typography variant="lead" color="white" className="mt-2 font-normal">
                    {grupo.horario}
                  </Typography>
                </div>
                <div className='flex'>
                  <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                    Costo:
                  </Typography>
                  <Typography variant="lead" color="white" className="mt-2 font-normal">
                    {grupo.costo}
                  </Typography>
                </div>
              </div>
            </div>
            <div className='flex mb-2'>
              <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                Tipo de Materia:
              </Typography>
              <Typography variant="lead" color="white" className="mt-2 font-normal">
                Programación e Ingeniería de Software
              </Typography>
            </div>

          </CardBody>

          <hr color='white' />

          <CardFooter className="flex items-center justify-end p-0">
            <Button
              variant="text"
              color="white"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button
              variant="text"
              color='white'
              className='flex items self-center'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              <Link href='/solicitud' className='mt-1'>Registrar</Link>
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      <Card className="bg-azul-oscuro w-[20rem] overflow-hidden">
        <CardHeader
          color="transparent"
          className="m-0 rounded-none h-[120px] w-[320px]"
        >
          <img
            src="images/Arquitectura de las computadoras.jpg"
            alt="Arquitectura de las computadoras"
            className='object-left h-[240] w-[]'
          />
        </CardHeader>

        <CardBody className='relative py-[0.5rem] px-[1rem]'>
          <Typography variant="h5" color="white">
            {grupo.nombre_materia}
          </Typography>
          <Typography variant="paragraph" color="white" className="mt-2 font-normal">
            Carreras: INF, SOF
          </Typography>
          <Typography variant="paragraph" color="white" className="mt-2 font-normal">
            Semestre: 4to
          </Typography>
        </CardBody>

        <div className="relative bg-white left-[10px] w-[300px] h-[2px]" />

        <CardFooter className="flex items-center justify-evenly p-0">
          <Button onClick={handleOpen} variant='text' className='flex items-center text-white w-[160px] py-2 pr-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <p className=''>Información</p>
          </Button>

          <Button variant='text' className='flex items-center text-white w-1/2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

            <Link href='/solicitud' className='relative inline-block'>Registrar</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
export default Tarjeta;
 */

"use client"

import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Modal } from "@nextui-org/react";
import Image from "next/image";

interface GroupData {
  clave_materia: number;
  nombre_materia: string;
  area: string;
  area_img: string;
  horario: string;
  profesor: string;
  costo: number;
}
export default function NewTarjeta({ group }: { group: GroupData }) {
  return (
    <>
      {/* Modal */}

      {/* Card */}
      <Card className="bg-primary text-primary-foreground">
        <Image
          src={group.area_img || "/images/Arquitectura de las computadoras.jpg"}
          className="h-48 w-full object-cover"
          alt="Arquitectura de las computadoras"
          width={500} height={200}
        />

        <CardBody className="pt-4 pb-0 px-4 gap-2">
          <h3 className="text-xl font-bold">{group.nombre_materia}</h3>

          <div className="flex items-center">
            <p className="text-base font-semibold">Area:</p>
            <p className="text-base ml-2">{group.area}</p>
          </div>

          <div className="flex items-center">
            <p className="text-base font-semibold">Semestre:</p>
            <p className="text-base ml-2">4to</p>
          </div>
        </CardBody>

        <CardFooter className="flex items-center justify-around">
          <Button
            variant="light"
            className="text-primary-foreground w-full"
            startContent={
              <span className="material-symbols-outlined">info</span>
            }
          >
            Información
          </Button>

          <Button
            variant="light"
            className="text-primary-foreground w-full"
            startContent={
              <span className="material-symbols-outlined">edit_square</span>
            }
          >
            Registrar
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}