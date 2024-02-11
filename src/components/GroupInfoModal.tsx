"use client"

import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactElement, cloneElement, useState } from "react";

interface GroupData {
  grupo_id: string;
  clave_materia: number;
  nombre_materia: string;
  area: string;
  area_img: string;
  inscritos: number;
  horario?: string;
  profesor?: string;
  costo?: number;
  carreras: string[];
}

export default function GroupInfoModal({ group, children }: { group: GroupData, children: ReactElement }) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        size="lg"
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
                <p className="text-base ml-2">{group.carreras?.join(", ")}</p>
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
              startContent={
                <span className="material-symbols-outlined">edit_square</span>
              }
              // onPress={() => router.push(`/admin/grupos/${group.id_grupo}`)}
              as={Link}
              href={`/admin/grupos/editar?group=${group.grupo_id}`}
            >
              Editar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {cloneElement(children, { onPress: () => setModalOpen(true) })}
    </>
  )
}