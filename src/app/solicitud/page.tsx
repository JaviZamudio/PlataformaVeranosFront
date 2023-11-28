"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import Header from "@/components/HeaderSolicitud";
import Tarjeta from "@/components/tarjetaSolicitud";

export default function Registro() {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const shortenedFileName =
        file.name.length > 20 ? file.name.substring(0, 20) + "..." : file.name;
      setUploadedFileName(shortenedFileName);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-300 py-2">
          <a href="inicio" className="text-black mx-2">
            Menú
          </a>
          <span>&gt;</span>
          <a href="" className="text-black mx-2">
            Solicitar Materia
          </a>
        </nav>
        <div className="container mt-4 flex">
          <div className="left-side flex-1 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label htmlFor="materia" className="font-bold block">
                  Materia:
                </label>
                <input
                  type="text"
                  id="materia"
                  name="materia"
                  className="w-full p-2 border rounded my-1"
                />
              </div>
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label htmlFor="Clave" className="font-bold block">
                  Clave Materia:
                </label>
                <input
                  type="text"
                  id="clave"
                  name="clave"
                  className="w-full p-2 border rounded my-1"
                />
              </div>
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label htmlFor="alumno" className="font-bold block">
                  Nombre del alumno:
                </label>
                <input
                  type="text"
                  id="alumno"
                  name="alumno"
                  className="w-full p-2 border rounded my-1"
                />
              </div>
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label htmlFor="Expediente" className="font-bold block">
                  Expediente:
                </label>
                <input
                  type="number"
                  id="expediente"
                  name="expediente"
                  className="w-full p-2 border rounded my-1"
                />
              </div>
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label htmlFor="correo" className="font-bold block">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  className="w-full p-2 border rounded my-1"
                />
              </div>
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label htmlFor="telefono" className="font-bold block">
                  Teléfono:
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full p-2 border rounded my-1"
                />
              </div>
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label htmlFor="plan" className="font-bold block">
                  Plan de Estudios:
                </label>
                <select
                  id="plan"
                  name="plan"
                  className="w-full p-2 border rounded my-1"
                >
                  <option value="opcion1">SOF18</option>
                  <option value="opcion2">INC18</option>
                  <option value="opcion3">LAT18</option>
                  <option value="opcion4">INF18</option>
                  <option value="opcion5">TEL18</option>
                </select>
              </div>
              <div className="input-container p-4 bg-white border border-gray-300 rounded shadow">
                <label
                  htmlFor="archivo"
                  className="icon-container font-bold block"
                >
                  Cargar Archivo:
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="archivo"
                    name="archivo"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="archivo"
                    className="cursor-pointer bg-gray-500 text-white px-1 py-1 rounded-full text-sm transition duration-300 ease-in-out hover:bg-gray-600"
                  >
                    Seleccionar Archivo
                  </label>
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  {uploadedFileName ? uploadedFileName : "No file selected"}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-800 text-white px-8 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-900">
                Registrarme
              </button>
            </div>
          </div>

          <div className="right-side flex-1 p-1 flex items-center justify-center flex-col">
            <div className="container-title text-center text-lg font-bold mb-4">
              Materias Sugeridas
            </div>
            <section className="grid grid-cols-2 md:grid-row-2 gap-4">
              <Tarjeta />
              <Tarjeta />
              <Tarjeta />
              <Tarjeta />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
