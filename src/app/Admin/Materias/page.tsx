import React from 'react';

export default function MateriasAdmin() {
    return (
        <>
        <header>
            <img src="public\logo.png" alt="" />
            <button typeof='button' >Cerrar Sesión</button>
        </header>
        <main>
            <h1>Editar Materia</h1>
            <div>
                <div>/* Lado izquierdo; Formulario  */
                    <form action=""></form>/* Formulario para editar datos de la materia  */
                        <div>
                            <p>Matera:</p>
                            <p></p>/* Variable del nombre de la materia  */
                        </div>
                        <div>
                            <p>Clave de Materia</p>
                            <p></p>/* Variable de la clave de la materia  */
                        </div>
                        <div>
                            <p>Semestre</p>
                            <p></p>/* Variable del número de semestre de la materia  */
                        </div>
                        <div>
                            <label htmlFor="Profesor">Profesor:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="Horario">Horario:</label>
                            <input type="text" />
                        </div>
                </div>
                <div></div> /* Lado central; línea de color para marcar tipo de materia  */
                <div>/* Lado derecho; imagen representativa del tipo de materia  */
                    <img src="" alt="" />
                </div>
            </div>
        </main>
        </>
    )
}