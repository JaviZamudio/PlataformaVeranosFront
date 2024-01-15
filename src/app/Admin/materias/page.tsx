"use client";

import React from 'react';
import Header from '@/components/HeaderAdmin'
import {
    Card,
    CardBody,
    Typography,
    Button,
    Input
} from "@material-tailwind/react";
import Image from 'next/image'
import Link from 'next/link'

export default function MateriasAdmin() {
    return (
        <>

            <Header />

            <main className='px-32 pt-10'>
                <Typography variant='h2'>
                    Editar Materia
                </Typography>
                <Card className="relative w-full h-[25rem] flex-row mt-5 bg-azul-marino rounded-3xl">

                    <CardBody className='h-full w-3/5 px-10 pt-8'>
                        <div className='flex'>
                            <Typography variant='lead' color='white' className='font-semibold'>
                                Materia:
                            </Typography>
                            <Typography variant='lead' color='white' >
                                Nombre de la materia
                            </Typography>
                        </div>
                        <div className='flex'>
                            <Typography variant='lead' color='white' className='font-semibold mt-3'>
                                Clave:
                            </Typography>
                            <Typography variant='lead' color='white' className='mt-3'>
                                ####
                            </Typography>
                        </div>
                        <div className='flex'>
                            <Typography variant='lead' color='white' className='font-semibold mt-3'>
                                Área:
                            </Typography>
                            <Typography variant='lead' color='white' className='mt-3'>
                                Nombre del área
                            </Typography>
                        </div>
                        <div className='w-3/5'>
                            <div className=' mt-3'>
                                <Input
                                    variant='standard'
                                    label='Profesor'
                                    color='white'
                                    crossOrigin={undefined}
                                    className='text-lg'
                                />
                            </div>
                            <div className=' mt-3'>
                                <Input
                                    variant='standard'
                                    label='Horario'
                                    color='white'
                                    crossOrigin={undefined}
                                    className='text-lg'
                                />
                            </div>
                            <div className=' mt-3'>
                                <Input
                                    variant='standard'
                                    label='Costo'
                                    color='white'
                                    crossOrigin={undefined}
                                    className='text-lg'
                                />
                            </div>
                        </div>
                        <Button variant='filled' className='flex mt-5 h-12 w-32 text-base bg-azul-oscuro'>
                            <Typography>
                                <Link href="/Admin">Guardar</Link>
                            </Typography>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>

                        </Button>
                    </CardBody>
                    <div
                        className="absolute right-0 m-0 w-2/5 h-full overflow-hidden rounded-r-3xl">
                        <Image
                            src="/images/Arquitectura de las computadoras.jpg"
                            alt="imagen materia"
                            className="h-full w-full object-none object-center"
                            width={700}
                            height={700}
                        />
                    </div>
                </Card>
            </main>
        </>
    )
}