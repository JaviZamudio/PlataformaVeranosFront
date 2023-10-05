import React from 'react';
import { Select, Option, Input, Button } from "@material-tailwind/react";
import Image from 'next/image';

export function Filtros() {
    return (
        <>
            <div className='w-72'>
                <Select variant="outlined" label="Carrera" className='bg-[#d9dfef]'>
                    <Option>
                        <Option>Todos</Option>
                        <hr />
                        <Image src="/images/info.png" alt="" className='inline-block' height={25} width={25} />
                        <p className='inline-block'>
                            Licenciatura en informática
                        </p>
                    </Option>
                    <Option>
                        <Image src="/images/lati.png" alt="" className='inline-block' height={100} width={100} />
                        <p className='inline-block'>
                            Licenciatura en Administración de las T.I.
                        </p>
                    </Option>
                    <Option>
                        <Image src="/images/soft.png" alt="" className='inline-block' height={100} width={100} />
                        <p className='inline-block'>
                            Ingeniería de Software
                        </p>
                    </Option>
                    <Option>
                        <Image src="/images/compu.png" alt="" className='inline-block' height={100} width={100} />
                        <p className='inline-block'>
                            Ingeniería en Computación
                        </p>
                    </Option>
                    <Option>
                        <Image src="/images/tele.png" alt="" className='inline-block' height={100} width={100} />
                        <p className='inline-block'>
                            Ingeniería en Telecomunicaciones y Redes
                        </p>
                    </Option>
                    <Option>
                        <Image src="/images/icad.png" alt="" className='inline-block' height={100} width={100} />
                        <p className='inline-block'>
                            Ingeniería en Ciencia y Analítica de Datos
                        </p>
                    </Option>
                    <Option>
                        <Image src="/images/itic22_1.png" alt="" className='inline-block' height={100} width={100} />
                        <p className='inline-block'>
                            Ingeniería en Tecnologías de Información y Ciberseguridad
                        </p>
                    </Option>
                </Select>
            </div>

            <div className='w-72'>
                <Select variant="outlined" label="Semestre" className='bg-[#d9dfef]'>
                    <Option>Todos</Option>
                    <hr />
                    <Option>1er Semestre</Option>
                    <Option>2do Semestre</Option>
                    <Option>3er Semestre</Option>
                    <Option>4to Semestre</Option>
                    <Option>5to Semestre</Option>
                    <Option>6to Semestre</Option>
                    <Option>7mo Semestre</Option>
                    <Option>8vo Semestre</Option>
                </Select>
            </div>

            <div className="relative flex w-full max-w-[28rem]">
                <Input
                    type='search'
                    label='Nombre o clave de la materia'
                    crossOrigin={undefined}
                    className='!bg-[#d9dfef]'
                />

                <Button
                    size="sm"
                    className="!absolute right-0 !rounded-l-none bg-azul-oscuro"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Button>
            </div>
        </>
    );
}
