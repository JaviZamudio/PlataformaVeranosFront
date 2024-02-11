"use client"

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Materia {
  clave: string;
  nombre: string;
}

export default function CrearGrupo() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [form, setForm] = useState({
    materia: "",
    horaInicio: "",
    horaFin: "",
    costo: "",
    profesor: "",
  });

  const getMaterias = async () => {
    setMaterias([
      { clave: "1234", nombre: "Materia 1" },
      { clave: "5678", nombre: "Materia 2" },
    ])
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form', form);
  }

  useEffect(() => {
    getMaterias();
  }, []);

  return (
    <main className="p-4 flex flex-col">
      <h1 className="text-3xl font-medium mt-4">
        Crear Grupo
      </h1>

      <form className="flex flex-col gap-4 w-full max-w-md mt-4" onSubmit={handleSubmit}>
        <Select
          label="Materia"
          placeholder="Selecciona una materia"
          value={form.materia}
          onChange={e => setForm({ ...form, materia: e.target.value })}
          isRequired
        >
          {materias.map(materia => (
            <SelectItem key={materia.clave} value={materia.clave}>{materia.nombre}</SelectItem>
          ))}
        </Select>
        <Input
          label="Hora de inicio"
          type="time"
          placeholder="00:00"
          value={form.horaInicio}
          onValueChange={value => setForm({ ...form, horaInicio: value })}
        />
        <Input
          label="Hora de fin"
          type="time"
          placeholder="00:00"
          value={form.horaFin}
          onValueChange={value => setForm({ ...form, horaFin: value })}
        />
        <Input
          label="Costo"
          type="number"
          placeholder="0"
          value={form.costo}
          onValueChange={value => setForm({ ...form, costo: value })}
        />
        <Input
          label="Profesor"
          type="text"
          placeholder="Nombre del profesor"
          value={form.profesor}
          onValueChange={value => setForm({ ...form, profesor: value })}
        />

        <Button color="primary" type="submit">
          Crear Grupo
        </Button>
      </form>
    </main>
  )
}