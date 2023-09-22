import React from 'react';

export default function Login() {
    return (
        <>
        <header>
            <img src="public\logo.png" alt="" />
        </header>
        <main>
            <div>/* Parte donde se ingresan los datos para ingresar al sistema */
                <img src="profile.png" alt="" />
            </div>
            <label htmlFor="Usuario">Usuario:</label>
            <input type="text" />
            <label htmlFor="Contraseña">Contraseña:</label>
            <input type="text" />
            <button type='submit'>Ingresar</button>
        </main>
        <aside>
            /*Decoración pendiente (imagenes, texto, más elementos) */
        </aside>
        </>
    )
}