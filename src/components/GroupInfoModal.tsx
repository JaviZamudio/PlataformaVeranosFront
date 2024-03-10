"use client"

import { HOST } from "@/configs";
import { AuthContext } from "@/contexts/AuthContext";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import Image from "next/image";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactElement, cloneElement, useContext, useState } from "react";

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

interface Request {
  nombre_alumno: string,
  ap_paterno: string,
  expediente_alumno: string,
  email_alumno: string,
  telefono_alumno: string,
}

export default function GroupInfoModal({ group, children }: { group: GroupData, children: ReactElement }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState<Request[] | null>(null);
  const { token } = useContext(AuthContext);

  const getRequests = async () => {
    const resBody = await fetch(`${HOST}/api/admin/grupos/${group.grupo_id}/solicitudes`, {
      method: 'GET',
      headers: {
        'Authorization': token || ''
      }
    }).then(res => res.json());

    console.log('Resultado de solicitudes', resBody);

    if (resBody.code !== "OK") {
      console.error('Error en la solicitud: ', resBody);
      return;
    }

    setRequests(resBody.data);
  }

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        size="xl"
        scrollBehavior="outside"
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

            <Divider className="mt-2" />

            {/* Show Requests */}
            {!requests && (
              <Button
                color="primary"
                variant="flat"
                onPress={getRequests}
                startContent={<span className="material-symbols-outlined">info</span>}
              >
                Ver Solicitudes
              </Button>
            )}

            {requests && requests.length === 0 && (
              <span className="text-center text-gray-500 block mt-2">No hay solicitudes</span>
            )}

            {requests && requests.length > 0 && (
              <Table className="w-full max-h-96 overflow-y-auto mt-2" isStriped removeWrapper>
                <TableHeader>
                  <TableColumn>Nombre</TableColumn>
                  <TableColumn>Expediente</TableColumn>
                  <TableColumn>Email</TableColumn>
                  <TableColumn>Telefono</TableColumn>
                </TableHeader>
                <TableBody>
                  {requests.map(request => (
                    <TableRow key={request.expediente_alumno}>
                      <TableCell>{`${request.nombre_alumno}`}</TableCell>
                      <TableCell>{request.expediente_alumno}</TableCell>
                      <TableCell>{request.email_alumno}</TableCell>
                      <TableCell>{request.telefono_alumno || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
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