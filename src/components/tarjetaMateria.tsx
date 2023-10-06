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

export default function Tarjeta() {

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open}
        handler={handleOpen} className='w-[56rem] h-[32rem] rounded-xl'>
        <Card className="bg-azul-oscuro overflow-hidden">
          <CardHeader
            color="transparent"
            className="m-0 rounded-none object-center h-full w-full"
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
              variant="gradient" 
              onClick={handleOpen}
              className='flex items center bg-azul-claro-1 text-azul-oscuro'  
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              <span>Registrar</span>
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

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

        <div className="relative bg-white left-[10px] w-[300px] h-[2px]" />

        <CardFooter className="flex items-center justify-evenly p-0">
          <Button onClick={handleOpen} variant='text' className='flex items-center text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <p className=''>Información</p>
          </Button>

          <Button variant='text' className='flex items-center text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

            <p className='relative inline-block'>Registrar</p>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}