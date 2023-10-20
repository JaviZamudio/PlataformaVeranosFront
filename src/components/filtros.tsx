import React, { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";
import Image from 'next/image';

export function Filtros() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [isDropdownVisible2, setDropdownVisible2] = useState(false);
    const [selectedItemIndex2, setSelectedItemIndex2] = useState<number | null>(null);
    const subjectList = [
        {
            name: "Licenciatura en Informática",
            value: "info",
            img: "/images/info.png"
        },

        {
            name: "Licenciatura en Administración de las T.I.",
            value: "lati",
            img: "/images/lati.png"
        },

        {
            name: "Ingeniería de Software",
            value: "soft",
            img: "/images/soft.png"
        },


        {
            name: "Ingeniería en Computación",
            value: "comp",
            img: "/images/compu.png"
        },

        {
            name: "Ingeniería en Telecomunicaciones y Redes",
            value: "tele",
            img: "/images/tele.png"
        },

        {
            name: "Ingeniería en Ciencia y Analítica de Datos",
            value: "icad",
            img: "/images/icad.png"
        },

        {
            name: "Ingeniería en Tecnologías de Información y Ciberseguridad",
            value: "itic",
            img: "/images/itic.png"
        }
    ];

    const areaList = [

        {
            name: "Entorno Social",
            value: "ensoc"
        },

        {
            name: "Matemáticas",
            value: "mate"
        },

        {
            name: "Arquitectura de las computadoras",
            value: "arqui"
        },

        {
            name: "Tratamiento de la información",
            value: "tinfo"
        },

        {
            name: "Redes",
            value: "redes"
        },

        {
            name: "Interacción Hombre Máquina",
            value: "Homaq"
        },

        {
            name: "Software de base",
            value: "softb"
        },

        {
            name: "Programación e Ingeniería de Software",
            value: "progs"
        },

        {
            name: "Formación Universitaria",
            value: "funiv"
        },

        {
            name: "Inglés",
            value: "ingles"
        },

        {
            name: "Tópico",
            value: "topic"
        }
    ]


    return (
        <>
            <div>
                <div className='relative h-10 w-72 max-w-xs'>
                    <div
                        className='bg-gris-azul p-2 h-10 rounded-md cursor-pointer 
                    text-blue-gray-700 text-opacity-95 font-sans font-normal border-solid border-blue-gray-200 border-[1px]'

                        onClick={e => {
                            setDropdownVisible(!isDropdownVisible);
                        }}>
                        <span>
                            {selectedItemIndex != null
                                ? subjectList[selectedItemIndex].name?.length > 27
                                    ? subjectList[selectedItemIndex].name?.substring(0, 27) + "..."
                                    : subjectList[selectedItemIndex].name
                                : "Carrera"}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                            className={isDropdownVisible ? "inline-block absolute w-4 h-4 right-2 top-3 rotate-180" : "inline-block absolute w-4 h-4 right-2 top-3"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    {
                        isDropdownVisible ? (
                            <div className='absolute bg-gris-azul py-2 mt-2 px-2 top-[100%] max-w-xs max-h-72 overflow-y-auto rounded-md cursor-pointer z-10'>
                                {
                                    subjectList.map((item, index) => (
                                        <div key={item.value} className='flex items-center p-2 hover:bg-[#0001] hover:rounded-md' onClick={e => {
                                            setSelectedItemIndex(index);
                                            setDropdownVisible(false);
                                        }}>
                                            <Image alt='' src={item.img} width={50} height={50} className='h-12 w-12 object-cover' />
                                            <span className='ml-4'>
                                                {item.name}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : <></>
                    }
                </div>
            </div >

            <div>
                <div className='relative h-10 w-72 max-w-xs'>
                    <div
                        className='bg-gris-azul p-2 h-10 rounded-md cursor-pointer 
                    text-blue-gray-700 text-opacity-95 font-sans font-normal border-solid border-blue-gray-200 border-[1px]'

                        onClick={e => {
                            setDropdownVisible2(!isDropdownVisible2);
                        }}>
                        <span>
                            {selectedItemIndex2 != null
                                ? areaList[selectedItemIndex2].name?.length > 27
                                    ? areaList[selectedItemIndex2].name?.substring(0, 27) + "..."
                                    : areaList[selectedItemIndex2].name
                                : "Área"}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                            className={isDropdownVisible2 ? "inline-block absolute w-4 h-4 right-2 top-3 rotate-180" : "inline-block absolute w-4 h-4 right-2 top-3"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    {
                        isDropdownVisible2 ? (
                            <div className='absolute bg-gris-azul py-2 mt-2 px-2 top-[100%] max-w-xs max-h-72 overflow-y-auto rounded-md cursor-pointer z-10'>
                                {
                                    areaList.map((item, index) => (
                                        <div key={item.value} className='flex items-center p-2 hover:bg-[#0001] hover:rounded-md' onClick={e => {
                                            setSelectedItemIndex2(index);
                                            setDropdownVisible2(false);
                                        }}>
                                            <span>
                                                {item.name}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : <></>
                    }
                </div>
            </div >

            <div className="relative flex w-full max-w-[28rem]">
                <Input
                    type='search'
                    label='Nombre o clave de la materia'
                    crossOrigin={undefined}
                    className='!bg-gris-azul'
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
