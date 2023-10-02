import React from 'react';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

export default function Header() {
    return (

        <header className="relative w-full h-36 bg-[url('/images/fondoHeader.png')]">
            <img src="images/logoHeader.png" alt="" className='float-left h-[100px] w-auto' />
            <nav className='absolute w-full h-10 bottom-0 bg-azul'>
             <ul className='float-right h-10 items-center'>
                <li className='relative inline-block'>
                <Button variant="text">  
                    <Link href="/inicio">
                    Inicio
                    </Link>
                </Button>
                </li>
                <li className='relative inline-block'>
                <Button variant="text">
                    <Link href="/solicitud">
                    Solicitar materia
                    </Link>
                </Button>
                </li>
            </ul> 
            </nav>
        </header>
    )
}