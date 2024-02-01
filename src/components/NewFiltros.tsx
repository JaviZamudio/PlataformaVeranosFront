import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";

const subjectList = [
  {
    name: "Todos",
    value: "todo",
    img: ""
  },
  {
    name: "Licenciatura en Informática",
    value: "info",
    img: "/images/info.png"
  },

  {
    name: "Licenciatura en Administración de las T.I.",
    value: "lati",
    img: "/images/lati.png"
  },

  {
    name: "Ingeniería de Software",
    value: "soft",
    img: "/images/soft.png"
  },


  {
    name: "Ingeniería en Computación",
    value: "comp",
    img: "/images/compu.png"
  },

  {
    name: "Ingeniería en Telecomunicaciones y Redes",
    value: "tele",
    img: "/images/tele.png"
  },

  {
    name: "Ingeniería en Ciencia y Analítica de Datos",
    value: "icad",
    img: "/images/icad.png"
  },

  {
    name: "Ingeniería en Tecnologías de Información y Ciberseguridad",
    value: "itic",
    img: "/images/itic.png"
  }
];

const areaList = [
  {
    name: "Todos",
    value: "todo"
  },
  {
    name: "Entorno Social",
    value: "ensoc"
  },

  {
    name: "Matemáticas",
    value: "mate"
  },

  {
    name: "Arquitectura de las computadoras",
    value: "arqui"
  },

  {
    name: "Tratamiento de la información",
    value: "tinfo"
  },

  {
    name: "Redes",
    value: "redes"
  },

  {
    name: "Interacción Hombre Máquina",
    value: "Homaq"
  },

  {
    name: "Software de base",
    value: "softb"
  },

  {
    name: "Programación e Ingeniería de Software",
    value: "progs"
  },

  {
    name: "Formación Universitaria",
    value: "funiv"
  },

  {
    name: "Inglés",
    value: "ingles"
  },

  {
    name: "Tópico",
    value: "topic"
  }
]

export default function NewFiltros() {
  return (
    <div className="flex items-center justify-around my-8 w-full gap-8 px-4">
      <Select placeholder="Selecciona una materia" label="Materia" className="max-w-sm">
        {subjectList.map((item) => (
          <SelectItem key={item.value} value={item.value} startContent={item.img && <Image src={item.img} alt={item.name} width={30} height={30} />} >
            {item.name}
          </SelectItem>
        ))}
      </Select>

      <Select placeholder="Selecciona un área" label="Área" className="max-w-sm">
        {areaList.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </Select>

      {/* Search by id */}
      <Input placeholder="Buscar por Clave" label="Clave" maxLength={5} className="max-w-xs" endContent={<Button isIconOnly size="sm" variant="faded" radius="lg"><span className="material-symbols-outlined !text-xl">search</span></Button>} />
    </div>
  )
}