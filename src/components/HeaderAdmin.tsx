import React from 'react';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

export default function Header() {
    return (

        <header className="relative w-full h-28 bg-[url('/images/fondoHeader.png')]">
            <div className='float-left h-[100px] w-auto'>
                <img src="images/logoHeader.png" alt="" className='h-full' />
            </div>
            <div className='absolute right-20 top-9'>
                <Button
                    variant='filled'
                    color='red'
                    size='sm'
                >
                    <Link href="Admin/Login">
                        Cerrar Sesión
                    </Link>
                </Button>
            </div>
        </header>
    )
}