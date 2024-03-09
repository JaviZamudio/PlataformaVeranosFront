"use client"

import { HOST } from "@/configs";
import { AuthContext } from "@/contexts/AuthContext";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface GroupData {
  grupo_id: string;
  clave_materia: number;
  nombre_materia: string;
  area: string;
  area_img: string;
  inscritos: number;
  carreras: string[];
  horario?: string;
  profesor?: string;
  costo?: number;
}

interface Materia {
  clave: string;
  nombre: string;
  carreras: string[];
  grupo?: GroupData;
}
export default function CrearGrupo() {
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const claveMateria = useSearchParams().get('materia') || "";
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [form, setForm] = useState({
    materia: "",
    horaInicio: "",
    horaFin: "",
    costo: "",
    profesor: "",
  });

  const getMaterias = async () => {
    const resBody = await fetch(`${HOST}/api/admin/materias`, {
      method: 'GET',
      headers: {
        'Authorization': token || ''
      }
    }).then(res => res.json());

    console.log('Materias Encontradas', resBody);

    if (resBody.code !== "OK") {
      console.error('Error en la solicitud: ', resBody);
      return;
    }

    setMaterias((resBody.data as Materia[]).filter(materia => materia.grupo === undefined));

    if (claveMateria) {
      setForm({ ...form, materia: claveMateria });
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reqBody = {
      claveMateria: Number(form.materia),
      costo: Number(form.costo) || undefined,
      profesor: form.profesor || undefined,
      hora_inicio: form.horaInicio || undefined,
      hora_fin: form.horaFin || undefined,
    }

    const resBody = await fetch(`${HOST}/api/admin/groups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token || ''
      },
      body: JSON.stringify(reqBody)
    }).then(res => res.json());

    console.log('Resultado de la creación del grupo', resBody);

    if (resBody.code !== "OK") {
      console.error('Error en la solicitud: ', resBody);
      return;
    }

    alert('Grupo creado exitosamente');
    router.push('/admin');
  }

  useEffect(() => {
    token && getMaterias();
  }, [token]);

  return (
    <main className="p-4 flex flex-col">
      <h1 className="text-3xl font-medium mt-4">
        Crear Grupo
      </h1>

      <form className="flex flex-col gap-4 w-full max-w-md mt-4" onSubmit={handleSubmit}>
        <Select
          label="Materia"
          placeholder="Selecciona una materia"
          isRequired
          selectedKeys={form.materia ? [form.materia] : []}
          onChange={e => setForm({ ...form, materia: e.target.value })}
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