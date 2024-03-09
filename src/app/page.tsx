import { redirect } from 'next/navigation';

export default async function Home() {
  // TODO: Tabla de solicitudes en materia
  // TODO: Agregar campo de Numero Telefono
  // TODO: Hacer el Apellido Materno opcional
  redirect('/inicio');
}