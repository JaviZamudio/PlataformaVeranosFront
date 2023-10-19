import React, {useState, useEffect} from 'react';
import { Select, Option, Input, Button, Typography } from "@material-tailwind/react";
import Image from 'next/image';

export function Filtros() {
        const [isDropdownVisible, setDropdownVisible] = useState(false);
        const [itemsList] = useState ([
            {
                name: "Licenciatura en Informática",
                value: "info",
                img: "images/info.png"
            },

            {
                name: "Licenciatura en Administración de las T.I.",
                value: "lati",
                img: "images/lati.png"
            },

            {
                name: "Ingeniería de Software",
                value: "soft",
                img: "images/soft.png"
            },


            {
                name: "Ingeniería en Computación",
                value: "comp",
                img: "images/compu.png"
            },

            {
                name: "Ingeniería en Telecomunicaciones y Redes",
                value: "tele",
                img: "images/tele.png"
            },

            {
                name: "Ingeniería en Ciencia y Analítica de Datos",
                value: "icad",
                img: "images/icad.png"
            },

            {
                name: "Ingeniería en Tecnologías de Información y Ciberseguridad",
                value: "itic",
                img: "images/itic.png"
            }
        ]);

        

        const [selectedItemIndex, setSelectedItemIndex] = useState (null); 
    return (
        <>
            <div>
                <div className='relative h-10 w-72 max-w-xs'>
                    <div 
                    className='bg-gris-azul p-2 h-10 rounded-md cursor-pointer 
                    text-blue-gray-700 text-opacity-95 font-sans font-normal border-solid border-blue-gray-200 border-[1px]' 
                    
                    onClick={e => {setDropdownVisible(!isDropdownVisible);
                    }}>
                        <span>
                            {selectedItemIndex != null 
                            ? itemsList[selectedItemIndex].name?.length > 27
                            ? itemsList[selectedItemIndex].name?.substring(0, 27) + "..."
                            : itemsList[selectedItemIndex].name 
                            : "Carrera"}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" 
                        className={isDropdownVisible ? "inline-block absolute w-4 h-4 right-2 top-3 rotate-180" : "inline-block absolute w-4 h-4 right-2 top-3"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    {
                        isDropdownVisible ? (
                            <div className='absolute bg-gris-azul py-2 mt-2 px-4 top-[100%] max-w-xs rounded-md cursor-pointer z-10'>
                                {
                                    itemsList.map((item, index) => (
                                        <div key={item.value} className='flex p-2 hover:bg-[#0001] hover:rounded-md' onClick={ e => {
                                            setSelectedItemIndex(index);
                                            setDropdownVisible(false);
                                        }}>
                                            <div className='flex items-center h-[50px] w-[50px]'>
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className='ml-4'>
                                                {item.name}
                                            </div>                                    
                                        </div>
                                    ))
                                }
                            </div>
                        ) : <></>
                    }
                </div>
            </div>
            

            {/*<div className='w-72'>
                <Select variant="outlined" label="Carrera" className='flex items-center opacity-100 px-0 gap-2 bg-[#d9dfef]'>
                    <Option>Todos</Option>
                    <hr />
                    <Option className='flex items-center gap-2'>
                        <Image src="/images/info.png" alt="" className='w-[35px] h-[35px]' height={100} width={100} />
                        <Typography variant='small'>
                            Licenciatura en Informática
                        </Typography>
                    </Option>
                    <Option className='flex items-center text-base'>
                        <Image src="/images/lati.png" alt="" className='w-[35px] h-[35px] mr-4' height={100} width={100} />
                        <Typography variant='small'>
                            Licenciatura en Administración de las T.I.
                        </Typography>
                    </Option>
                    <Option className='flex items-center text-base'>
                        <Image src="/images/soft.png" alt="" className='w-[35px] h-[35px] mr-4' height={100} width={100} />
                        <Typography variant='small'>
                            Ingeniería de Software
                        </Typography>
                    </Option>
                    <Option className='flex items-center text-base'>
                        <Image src="/images/compu.png" alt="" className='w-[35px] h-[35px] mr-4' height={100} width={100} />
                        <Typography variant='small'>
                            Ingeniería en Computación
                        </Typography>
                    </Option>
                    <Option className='flex items-center text-base'>
                        <Image src="/images/tele.png" alt="" className='w-[35px] h-[35px] mr-4' height={100} width={100} />
                        <Typography variant='small'>
                            Ingeniería en Telecomunicaciones y Redes
                        </Typography>
                    </Option>
                    <Option className='flex items-center text-base'>
                        <Image src="/images/icad.png" alt="" className='w-[35px] h-[35px] mr-4' height={100} width={100} />
                        <Typography variant='small'>
                            Ingeniería en Ciencia y Analítica de Datos
                        </Typography>
                    </Option>
                    <Option className='flex items-center text-base'>
                        <Image src="/images/itic22_1.png" alt="" className='w-[35px] h-[35px] mr-4' height={100} width={100} />
                        <Typography variant='small'>
                            Ingeniería en Tecnologías de Información y Ciberseguridad
                        </Typography>
                    </Option>
                </Select>
            </div>*/}

            <div className='w-72'>
                <Select variant="outlined" label="Semestre" className='bg-gris-azul'>
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
