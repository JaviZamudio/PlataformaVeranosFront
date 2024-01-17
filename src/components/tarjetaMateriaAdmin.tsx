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

export default function TarjetaAdmin() {

  return (
    <>
      <Card className="bg-azul-oscuro w-[20rem] overflow-hidden shadow-xl">
        <CardHeader
          color="transparent"
          className="m-0 rounded-none h-[120px] w-[320px]"
        >
          <img
            src="images/Programacion e ingenieria de software.jpg"
            alt="Programacion e ingenieria de software"
            className='object-left h-[240] w-[]'
          />
        </CardHeader>

        <CardBody className='relative py-[0.5rem] px-[1rem]'>
          <Typography variant="h5" color="white">
            Programación Orientada a Objetos
          </Typography>

          <div className='w-full inline-block'>
            <div className='flex relative'>
              <Typography variant="paragraph" color="white" className="mt-2 mr-1 font-semibold">
                Carreras:
              </Typography>
              <Typography variant="paragraph" color="white" className="mt-2 font-normal">
                Ingeniería de Software
              </Typography>
            </div>

            <div className='flex relative'>
              <Typography variant="paragraph" color="white" className="mt-2 mr-1 font-semibold">
                Profesor:
              </Typography>
              <Typography variant="paragraph" color="white" className="mt-2 font-normal">
                Carlos Alberto Olmos Trejo
              </Typography>
            </div>

            <div className='flex relative'>
              <Typography variant="paragraph" color="white" className="mt-2 mr-1 font-semibold">
                Área:
              </Typography>
              <Typography variant="paragraph" color="white" className="mt-2 font-normal">
                Programación e Ingeniería de Software
              </Typography>
            </div>

            <div className='flex relative'>
              <Typography variant="paragraph" color="white" className="mt-2 mr-1 font-semibold">
                Clave:
              </Typography>
              <Typography variant="paragraph" color="white" className="mt-2 font-normal">
                1102
              </Typography>
            </div>

            <div className='flex relative'>
              <Typography variant="paragraph" color="white" className="mt-2 mr-1 font-semibold">
                Horario:
              </Typography>
              <Typography variant="paragraph" color="white" className="mt-2 font-normal">
                9:00 AM - 11:00 AM
              </Typography>
            </div>

            <div className='flex relative'>
              <Typography variant="paragraph" color="white" className="mt-2 mr-1 font-semibold">
                Costo:
              </Typography>
              <Typography variant="paragraph" color="white" className="mt-2 font-normal">
                $350
              </Typography>
            </div>

            <div className='flex absolute right-4 bottom-2'>
              <Typography variant="paragraph" color="white" className="mt-2 mr-1 font-semibold">
                Inscritos:
              </Typography>
              <Typography variant="paragraph" color="white" className="mt-2 font-normal">
                8
              </Typography>
            </div>
          </div>
        </CardBody>

        <div className="relative bg-white left-[10px] w-[300px] h-[2px] rounded-full" />

        <CardFooter className="flex items-center justify-evenly p-0">
          <Button variant='text' className='flex w-full pl-[35%] place-items-center text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

            <Link href='/Admin/materias' className='relative inline-block'>Editar</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}