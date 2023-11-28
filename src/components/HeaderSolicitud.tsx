import React from 'react';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

export default function Header() {
    return (

        <header className="relative w-full h-36 bg-[url('/images/fondoHeader.png')]">
            <Link href="/inicio">
            <img src="images/logoHeader.png" alt="" className='float-left h-[100px] w-auto' />
                    </Link>
            <nav className='absolute w-full h-10 bottom-0 bg-azul-marino'>
            </nav>
        </header>
    )
}