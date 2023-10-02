"use client";

import React from 'react';
import Header from '@/components/Header';
import Tarjeta from '@/components/tarjetaMateria';


export default function Inicio() {
  return (
    <>
      <Header />

      <main>
        <section> 
          {/* Seccion de filtros */}
          <label htmlFor="Carrera">Carrera</label>
          <select name="Carrera">
            <option value="inf">Licencitura en Informática</option>
            <option value="sof">Ingeniería de Software</option>
            <option value="inc">Ingeniería en Computación</option>
            <option value="lat">Licenciatura en Administración de las T.I.</option>
            <option value="tel">Licenciatura en Telecomunicaciones y Redes</option>
          </select>
          <select name="Semestre">
            <option value="sem1">1er Semestre</option>
            <option value="sem2">2do Semestre</option>
            <option value="sem3">3er Semestre</option>
            <option value="sem4">4to Semestre</option>
            <option value="sem5">5to Semestre</option>
          </select>
          <form action="/buscar" method="get">
            <input type="text" placeholder="Nombre o clave de la materia"></input>
            <button type="submit">
              <img src="search.jpg" alt="" />
            </button>
          </form>
        </section>
        <section className='p-20 grid grid-cols-3 gap-x-28 gap-y-10 content-start'>   
      
          <Tarjeta/>

          <Tarjeta/>

          <Tarjeta/>

          <Tarjeta/>

        </section>
      </main>
    </>
  )
}