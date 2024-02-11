"use client"

import { HOST } from "@/configs";
import { AuthContext } from "@/contexts/AuthContext";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useRef, useState } from "react";

export default function EditarGrupo() {
  const groupId = useSearchParams().get('group') || "";
  const router = useRouter();
  const { token } = useContext(AuthContext);
  const [group, setGroup] = useState({
    horaInicio: "",
    horaFin: "",
    costo: "",
    profesor: "",
    nombreMateria: "",
  });
  const [form, setForm] = useState({
    horaInicio: "",
    horaFin: "",
    costo: "",
    profesor: "",
  });

  const getGroup = async () => {
    const resBody = await fetch(`${HOST}/api/admin/groups/${groupId}`).then(res => res.json());
    console.log('resBody', resBody);

    if (resBody.code !== "OK") {
      console.error('Error en la solicitud: ', resBody);
      return;
    }

    setGroup({
      horaInicio: resBody.data.hora_inicio,
      horaFin: resBody.data.hora_fin,
      costo: resBody.data.costo,
      profesor: resBody.data.profesor,
      nombreMateria: resBody.data.materia.nombre,
    });

    setForm({
      horaInicio: resBody.data.hora_inicio || "",
      horaFin: resBody.data.hora_fin || "",
      costo: resBody.data.costo || "",
      profesor: resBody.data.profesor || "",
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form', form);

    const payload = {
      hora_inicio: form.horaInicio,
      hora_fin: form.horaFin,
      costo: form.costo,
      profesor: form.profesor,
    };

    const resBody = await fetch(`${HOST}/api/admin/groups/${groupId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token || ''
      },
      body: JSON.stringify(payload)
    }).then(res => res.json());

    console.log('resBody', resBody);

    if (resBody.code !== "OK") {
      console.error('Error en la solicitud: ', resBody);
      return;
    }

    alert('Grupo actualizado correctamente');
    router.push('/admin');
  }

  useEffect(() => {
    groupId && getGroup();
  }, []);

  return (
    <main className="p-4 flex flex-col">
      <h1 className="text-3xl font-medium mt-4">
        Editar Grupo:
      </h1>
      <h2 className="text-2xl font-medium mt-2">
        {group.nombreMateria}
      </h2>

      <form className="flex flex-col gap-4 w-full max-w-md mt-4" onSubmit={handleSubmit}>
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
        <Button color="primary" variant="bordered" as={Link} href={`/admin`} tabIndex={-1}>
          Cancelar
        </Button>
        <Button color="primary" type="submit">
          Guardar
        </Button>
      </form>
    </main>
  )
}