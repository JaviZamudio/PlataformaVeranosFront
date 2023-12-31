import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function PopUp() {

    return (

    <Card className="bg-azul-oscuro overflow-hidden w-[48rem] h-[32rem]">
        <CardHeader
            color="transparent"
            className="m-0 rounded-none object-center w-full !h-{240px}"
        >
            <img
                src="images/Arquitectura de las computadoras.jpg"
                alt="Arquitectura de las computadoras"
            />
        </CardHeader>

        <CardBody className='relative py-[0.5rem] px-[1rem]'>

            <Typography variant="h3" color="white">
                Programación Orientada a Objetos
            </Typography>

            <div>
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
                            Carlos Alberto Olmos Trejo
                        </Typography>
                    </div>
                </div>
                <div className='w-1/2 inline-block'>
                    <div className='flex'>
                        <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold top-0">
                            Clave:
                        </Typography>
                        <Typography variant="lead" color="white" className="mt-2 font-normal top-0">
                            1102
                        </Typography>
                    </div>
                    <div className='flex'>
                        <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                            Horario:
                        </Typography>
                        <Typography variant="lead" color="white" className="mt-2 font-normal">
                            9:00 AM - 1:00 PM
                        </Typography>
                    </div>
                    <div className='flex'>
                        <Typography variant="lead" color="white" className="mt-2 mr-1 font-semibold">
                            Costo:
                        </Typography>
                        <Typography variant="lead" color="white" className="mt-2 font-normal">
                            $ 350
                        </Typography>
                    </div>
                </div>
            </div>
            <div className='flex'>
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
                //onClick={handleOpen}
                className="mr-1"
            >
                <span>Cancelar</span>
            </Button>
            <Button
                variant="gradient"
                //onClick={handleOpen}
                className='flex items center !bg-azul-claro-1 text-azul-oscuro'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <span>Registrar</span>
            </Button>
        </CardFooter>
    </Card>

    )
}