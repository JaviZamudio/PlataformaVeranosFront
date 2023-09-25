"use client";

import React from 'react';
import Link from 'next/link'
import Header from '@/components/Header';
import { Button } from "@material-tailwind/react";

export default function Inicio() {
  return (
    <>
      <Header />

      <header >
        {/* Encabezado con logo de facultad y botones */}
        <h1>Plataforma Veranos UAQ</h1>
        <img src="public\logo.png" alt="" />
        <nav>
          <ul>
            <li>
              <Button>  
                <Link href="/">
                  Inicio
                </Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/solicitud">
                  Solicitar materia
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
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