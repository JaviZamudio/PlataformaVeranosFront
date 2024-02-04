"use client"

import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface GroupData {
  clave_materia: number;
  nombre_materia: string;
  area: string;
  area_img: string;
  inscritos: number;
  horario: string;
  profesor: string;
  costo: number;
  carreras: string[];
}
export default function NewTarjeta({ group }: { group: GroupData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        size="md"
      >
        <ModalContent>
          <Image
            src={group.area_img || "/images/Arquitectura de las computadoras.jpg"}
            className="h-56 w-full object-cover mb-2"
            alt="Arquitectura de las computadoras"
            width={500} height={200}
          />
          <ModalBody>
            <h2 className="text-xl font-bold">{group.nombre_materia}</h2>
            <Divider />
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <p className="text-base font-semibold">Area:</p>
                <p className="text-base ml-2">{group.area}</p>
              </div>
              <div className="flex items-center">
                <p className="text-base font-semibold">Carreras:</p>
                <p className="text-base ml-2">{group.carreras.join(", ")}</p>
              </div>
              <div className="flex items-center">
                <p className="text-base font-semibold">Profesor:</p>
                <p className="text-base ml-2">{group.profesor}</p>
              </div>
              <div className="flex items-center">
                <p className="text-base font-semibold">Horario:</p>
                <p className="text-base ml-2">{group.horario}</p>
              </div>
              <div className="flex items-center">
                <p className="text-base font-semibold">Costo:</p>
                <p className="text-base ml-2">{group.costo}</p>
              </div>
              <div className="flex items-center">
                <p className="text-base font-semibold">Clave:</p>
                <p className="text-base ml-2">{group.clave_materia}</p>
              </div>
              <div className="flex items-center col-span-2">
                <p className="text-base font-semibold">Registrados:</p>
                <p className="text-base ml-2">{`${group.inscritos}/20 para abrir el grupo`}</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              variant="light"
              onPress={() => setModalOpen(false)}
            >
              Cerrar
            </Button>
            <Button
              color="primary"
              onPress={() => router.push(`/solicitud?materia=${group.clave_materia}`)}
              startContent={
                <span className="material-symbols-outlined !text-lg">edit_square</span>
              }
            >
              Registrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Card */}
      <Card className="bg-primary text-primary-foreground">
        <Image
          src={group.area_img || "/images/Arquitectura de las computadoras.jpg"}
          className="h-48 w-full object-cover"
          alt="Arquitectura de las computadoras"
          width={500} height={200}
        />

        <CardBody className="pt-4 gap-2">
          <h3 className="text-xl font-bold">{group.nombre_materia}</h3>

          <div className="flex items-center">
            <p className="text-base font-semibold">Area:</p>
            <p className="text-base ml-2">{group.area}</p>
          </div>

          <div className="flex items-center">
            <p className="text-base font-semibold">Carreras:</p>
            <p className="text-base ml-2">{group.carreras.join(", ")}</p>
          </div>

          {/* Inscritos */}
          <div className="flex items-center">
            <p className="text-base font-semibold">Registrados:</p>
            <p className="text-base ml-2">{`${group.inscritos}/20`}</p>
          </div>
        </CardBody>

        <Divider className="bg-white mx-auto w-11/12" />

        <CardFooter className="flex items-center justify-around">
          <Button
            variant="light"
            className="text-primary-foreground w-full"
            startContent={
              <span className="material-symbols-outlined">info</span>
            }
            onPress={() => setModalOpen(true)}
          >
            Información
          </Button>

          <Button
            variant="light"
            className="text-primary-foreground w-full"
            startContent={
              <span className="material-symbols-outlined">edit_square</span>
            }
            onPress={() => router.push(`/solicitud?materia=${group.clave_materia}`)}
          >
            Registrar
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}