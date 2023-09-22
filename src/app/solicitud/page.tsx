import React from 'react';

export default function Registro() {
    return (
        <>
        <header>
            <img src="public\logo.png" alt="" />
        </header>
        <main>
            <section>
                <h1>Registro de Materias</h1>
                <input type="text" name='Clave Materia'/>
                <input type="text" name='Nombre de Materia'/>
                <input type="text" name='Nombre de Alumno'/>
                <input type="text" name='Expediente'/>
                <input type="text" name='Correo electrónico'/>
                <input type="text" name='Teléfono'/>
                <label htmlFor="Carrera">Carrera</label>
                <select name="Plan de estudios">
                        <option value="inf">Licencitura en Informática</option>
                        <option value="sof">Ingeniería de Software</option>
                        <option value="inc">Ingeniería en Computación</option>
                        <option value="lat">Licenciatura en Administración de las T.I.</option>
                        <option value="tel">Licenciatura en Telecomunicaciones y Redes</option>
                </select>
                <form action="/subir-archivo" method="post">
                <button type="submit">
                    <img src="upload.jpg" alt="" />
                </button>
                <input type="text" placeholder="Subir archivo"></input>/* No sé qué elemento vaya en realidad :/ */
                </form>
                <button>
                    Inscribirme
                    <img src="plus.svg" alt="" />
                </button>
            </section>
            <hr />
            <section>
                <div>
                    <img src="imgMateria.png" alt="" />
                    <h1>Nombre de materia</h1>
                    <p>Carrera:</p>
                    <p>Semestre:</p>
                    <hr />
                    <footer>
                        <button type='button'>
                            <img src="" alt="" />
                            Información
                        </button>
                        <button type='button'>
                            <img src="" alt="" />
                            Registrar
                        </button>
                    </footer>
                </div>
            </section>
        </main>
        </>
    )
}