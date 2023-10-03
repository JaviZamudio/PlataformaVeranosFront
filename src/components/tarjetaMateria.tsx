import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function Tarjeta() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

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
                <>
                    <Button onClick={handleOpen} variant='text' className='flex items-center text-white w-[150px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <p className='pl-2 relative inline-block'>Información</p>
                    </Button>
                    <Dialog open={true} handler={handleOpen}>
                        <DialogHeader>Its a simple dialog.</DialogHeader>
                        <DialogBody divider>
                            The key to more success is to have a lot of pillows. Put it this way,
                            it took me twenty five years to get these plants, twenty five years of
                            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                            getting started. I&apos;m up to something. Fan luv.
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button variant="gradient" color="green" onClick={handleOpen}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </>
                <Button variant='text' className='flex items-center text-white w-[150px]'>
                    <img src="icons/editar.png" alt="editar" className='relative inline-block w-[15px] h-[15px] mb-[1px]' />
                    <p className='pl-2 relative inline-block'>Registrar</p>
                </Button>
            </CardFooter>
        </Card>
    )
}