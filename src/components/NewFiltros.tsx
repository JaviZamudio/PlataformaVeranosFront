import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";

const careersList = [
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
    value: "SOF",
    img: "/images/soft.png"
  },


  {
    name: "Ingeniería en Computación",
    value: "COM",
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
    name: "Entorno Social",
    value: 1
  },

  {
    name: "Matemáticas",
    value: 3
  },

  {
    name: "Arquitectura de las computadoras",
    value: 5
  },

  {
    name: "Tratamiento de la información",
    value: 7
  },

  {
    name: "Redes",
    value: 9
  },

  {
    name: "Interacción Hombre Máquina",
    value: 11
  },

  {
    name: "Software de base",
    value: 2
  },

  {
    name: "Programación e Ingeniería de Software",
    value: 4
  },

  {
    name: "Formación Universitaria",
    value: 6
  },

  {
    name: "Inglés",
    value: 8
  },

  {
    name: "Tópico",
    value: 10
  }
]

export default function NewFiltros({ setFiltros, filtros }: { setFiltros: Function, filtros: { carrera: string | null, area_id: string | null, claveMateria: string | null } }) {
  return (
    <div className="flex items-center my-4 w-full max-w-6xl gap-8">
      <Select
        placeholder="Selecciona una carrera"
        label="Carreras"
        className="max-w-xs"
        selectedKeys={filtros.carrera ? [filtros.carrera] : []}
        onChange={(e) => setFiltros({ ...filtros, carrera: e.target.value })}
      // onSelectionChange={(keys) => console.log((keys as Set<string>).values().next().value)}
      // onChange={(e) => console.log(e.target.value)}
      >
        {careersList.map((item) => (
          <SelectItem key={item.value} value={item.value} startContent={item.img && <Image src={item.img} alt={item.name} width={30} height={30} />} >
            {item.name}
          </SelectItem>
        ))}
      </Select>

      <Select
        placeholder="Selecciona un área"
        label="Área"
        className="max-w-xs"
        selectedKeys={filtros.area_id ? [filtros.area_id] : []}
        onChange={(e) => setFiltros({ ...filtros, area_id: e.target.value })}
      >
        {areaList.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </Select>

      {/* Search by id */}
      <Input
        placeholder="Buscar por Clave"
        label="Clave"
        maxLength={5}
        className="ml-auto max-w-xs"
        // endContent={<Button isIconOnly size="sm" variant="faded" radius="lg">
        //   <span className="material-symbols-outlined !text-xl">search</span>
        // </Button>}
        isClearable
        value={filtros.claveMateria || ""}
        onValueChange={(value) => setFiltros({ ...filtros, claveMateria: value })}
      />
    </div>
  )
}