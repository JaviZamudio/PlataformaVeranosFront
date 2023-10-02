import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

export default function Tarjeta() {
    return (

        <Card className="bg-azul-oscuro w-[20rem] overflow-hidden">
            <CardHeader
                color="transparent"
                className="m-0 rounded-none object-center h-[120px] w-[320px]"
                >
                <img
                    src="images/Arquitectura de las computadoras.jpg"
                    alt="Arquitectura de las computadoras"
                />
            </CardHeader>
            <CardBody className='relative py-[0.5rem] px-[1rem]'>
                <Typography variant="h4" color="white">
                    Principios de electrónica y principios lógicos
                </Typography>
                <Typography variant="lead" color="white" className="mt-2 font-normal">
                    Carreras: INF, SOF
                </Typography>
                <Typography variant="lead" color="white" className="mt-2 font-normal">
                    Semestre: 4to
                </Typography>
            </CardBody>
            <div className="relative bg-white left-[10px] w-[300px] h-[2px]"></div>
            <CardFooter className="flex items-center justify-between p-0">
                <Button variant='text' className='flex items-center text-white w-[150px]'>
                    <img src="icons/agregar.png" alt="agregar" className='relative inline-block w-[15px] h-[15px] mb-[1px]'/>
                    <p className='pl-2 relative inline-block'>Información</p>
                </Button>
                <Button variant='text' className='flex items-center text-white w-[150px]'>
                    <img src="icons/editar.png" alt="editar" className='relative inline-block w-[15px] h-[15px] mb-[1px]'/>
                    <p className='pl-2 relative inline-block'>Registrar</p>
                </Button>
            </CardFooter>
        </Card>
        
    )
}