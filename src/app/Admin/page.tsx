import React from 'react';

export default function InicioAdmin() {
  return (
    <>
      {/* Encabezado con logo de facultad y botones */}
      <header> 
        <img src="public\logo.png" alt="" />
        <button typeof='button' >Cerrar Sesión</button>
      </header>

      <main>
        { /* Seccion de filtros */}
        <section>
          <label htmlFor="Carrera">Carrera</label>
          <select name="Carrera">
            <option value="inf">Licencitura en Informática</option>
            <option value="sof">Ingeniería de Software</option>
            <option value="inc">Ingeniería en Computación</option>
            <option value="lat">Licenciatura en Administración de las T.I.</option>
            <option value="tel">Licenciatura en Telecomunicaciones y Redes</option>
          </select>
          <label htmlFor="Carrera">Semestre</label>
          <select name="Semestre">
            <option value="sem1">1er Semestre</option>
            <option value="sem2">2do Semestre</option>
            <option value="sem3">3er Semestre</option>
            <option value="sem4">4to Semestre</option>
            <option value="sem5">5to Semestre</option>
          </select>
          <label htmlFor="Carrera">Tipo de Materia</label>
          <select name="Tipo Materia">
            <option value="soc">Entorno Social</option>
            <option value="mat">Matemáticas</option>
            <option value="ing">Inglés</option>
            <option value="fac">Formación Académica</option>
            <option value="sof">Software de base</option>
          </select>
          <form action="/buscar" method="get">
            <input type="text" placeholder="Nombre o clave de la materia"></input>
            <button type="submit">
              <img src="search.jpg" alt="" />
            </button>
          </form>
        </section>
        <section>  
          {/* Tarjetas de cada materia disponible */}
          <div>
            <header>
              <img src="imgMateria.png" alt="" />
            </header>
            <main>
              <h1>Nombre de la materia</h1>
              <p>Carrera: </p>
              <p>Semestre</p>
            </main>
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