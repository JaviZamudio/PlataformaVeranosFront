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
                    {/* Lado izquierdo; Formulario  */}
                    <div>
                        {/* Formulario para editar datos de la materia  */}
                        <form action=""></form>
                        <div>
                            <p>Materia:</p>
                            {/* Variable del nombre de la materia  */}
                            <p></p>
                        </div>
                        <div>
                            <p>Clave de Materia</p>
                            {/* Variable de la clave de la materia  */}
                            <p></p>
                        </div>
                        <div>
                            <p>Semestre</p>
                            {/* Variable del número de semestre de la materia  */}
                            <p></p>
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
                    {/* Lado central; línea de color para marcar tipo de materia  */}
                    <div></div>
                    {/* Lado derecho; imagen representativa del tipo de materia  */}
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}