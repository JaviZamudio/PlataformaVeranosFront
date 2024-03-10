import { redirect } from 'next/navigation';

export default async function Home() {
  // TODO: Hacer el Apellido Materno opcional-
  // TODO: Agregar gestion de periodos-
  redirect('/inicio');
}