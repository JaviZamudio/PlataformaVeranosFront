"use client"

import Header from '@/components/Header';
import { HOST } from '@/configs';
import { Button, Input, Link, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SolicitudPage() {
  const materia = useSearchParams().get("materia")
  const router = useRouter()
  // 'expediente_alumno', 'nombre_alumno', 'ap_paterno', 'ap_materno', 'email_alumno', 'clave_materia'
  const [form, setForm] = React.useState({
    expediente_alumno: '',
    nombre_alumno: '',
    ap_paterno: '',
    ap_materno: '',
    email_alumno: '',
    clave_materia: materia || '',
  })
  const [captura, setCaptura] = React.useState<File | null>(null)
  const [dragOver, setDragOver] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // return console.log(form, captura)

    if (!captura) {
      alert('Debes subir una captura')
    }

    const formData = new FormData()

    formData.append('expediente_alumno', form.expediente_alumno)
    formData.append('nombre_alumno', form.nombre_alumno)
    formData.append('ap_paterno', form.ap_paterno)
    formData.append('ap_materno', form.ap_materno)
    formData.append('email_alumno', form.email_alumno)
    formData.append('clave_materia', form.clave_materia)
    formData.append('captura', captura!)

    const resBody = await fetch(`${HOST}/api/solicitudes`, {
      method: 'POST',
      body: formData
    }).then(res => res.json())

    // TODO: Make a prettier feedback for the user
    if (resBody.code === "INVALID_FILE") return alert('La captura no es válida')
    if (resBody.code === "NO_ACTIVE_PERIOD") return alert('No es posible solicitar materias en este momento')
    if (resBody.code === "ALREADY_REGISTERED") return alert('Ya has solicitado esta materia')

    if (resBody.code !== "OK") return alert('Hubo un error al enviar la solicitud')

    alert('Solicitud enviada')
    router.push('/inicio')
    return
  }

  return (
    <>
      <Header />
      <main className='flex flex-col w-full items-center p-4'>

        <form className='grid grid-cols-2 w-full max-w-2xl p-4 gap-8' onSubmit={handleSubmit}>
          <h1 className='col-span-2 text-3xl font-bold text-azul-marino mt-4'>Solicitar materia</h1>
          <Input label="Expediente" placeholder="Escibe tu expediente" value={form.expediente_alumno} onValueChange={(value) => setForm({ ...form, expediente_alumno: value })} isRequired />
          <Input label="Nombre" placeholder="Escribe tu nombre" value={form.nombre_alumno} onValueChange={(value) => setForm({ ...form, nombre_alumno: value })} isRequired />
          <Input label="Apellido paterno" placeholder="Escribe tu apellido paterno" value={form.ap_paterno} onValueChange={(value) => setForm({ ...form, ap_paterno: value })} isRequired />
          <Input label="Apellido materno" placeholder="Escribe tu apellido materno" value={form.ap_materno} onValueChange={(value) => setForm({ ...form, ap_materno: value })} isRequired />
          <Input label="Correo" placeholder="Escribe tu correo" value={form.email_alumno} onValueChange={(value) => setForm({ ...form, email_alumno: value })} isRequired />
          <Input label="Clave de materia" placeholder="Escribe la clave de la materia" value={form.clave_materia} onValueChange={(value) => setForm({ ...form, clave_materia: value })} isRequired />

          {/* TODO: Implement some kind of "required" for the screenshot */}
          {/* Screen Shot */}
          <div className='col-span-2'>
            <h2 className='text-xl font-bold text-azul-marino  flex items-end gap-2'>
              Subir Captura
              <Popover placement="right" showArrow>
                <PopoverTrigger>
                  <span className='material-symbols-outlined !text-lg cursor-pointer'>info</span>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-base font-bold">Que es?</div>
                    <div className="text-sm">Sube una captura de pantalla de tu <Link className='text-sm' underline='hover' isExternal showAnchorIcon href="http://comunidad2.uaq.mx/portal/index.jsp">Portal UAQ </Link> </div>
                    <Image src="/images/comprobante.png" alt="portal" className='mx-auto mt-2 w-64 h-40 object-contain bg-gray-300' width={300} height={300} />
                  </div>
                </PopoverContent>
              </Popover>
            </h2>
            <div
              className={`flex flex-col items-center justify-center w-full h-64 bg-gray-200 rounded-md p-4 ${dragOver ? 'border-4 border-dashed border-azul-marino' : ''}`}
              onDragOver={(e) => {
                e.preventDefault()
                setDragOver(true)
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                setDragOver(false)
              }}
              onDrop={(e) => {
                setDragOver(false)
                console.log('drop')

                const file = e.dataTransfer.files[0]

                if (file) {
                  setCaptura(file)
                }

                e.preventDefault()
              }}
            >
              {!captura && <>
                <p className='text-gray-500'>Arrastra tu comprobante aquí</p>
                <p className='text-gray-500'>o</p>
                <Button variant="flat" color="primary" size="sm" onPress={() => {
                  const input = document.createElement('input')
                  input.type = 'file'
                  input.accept = 'image/*'
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files![0]
                    if (file) {
                      setCaptura(file)
                    }
                  }
                  input.click()
                }}>
                  Selecciona un archivo
                </Button>
              </>}

              {captura &&
                <div className='flex flex-col items-center justify-center w-full h-64 bg-gray-200 rounded-md gap-2'>
                  <img src={URL.createObjectURL(captura)} alt="captura" className='w-auto h-40 object-contain bg-gray-300' />
                  <p className='text-gray-500'>{captura.name}</p>
                </div>
              }
            </div>
          </div>

          <Button color="primary" variant="solid" size="md" className='ml-auto w-full max-w-xs self-end col-span-2' type="submit">
            Enviar
          </Button>
        </form >
      </main >
    </>
  )
}