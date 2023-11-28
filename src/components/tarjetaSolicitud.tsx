import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Dialog,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Tarjeta() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen} className="rounded-xl">
        <Card className="bg-azul-oscuro overflow-hidden w-[full] flex flex-col">
          <CardHeader
            color="transparent"
            className="m-0 rounded-none flex-grow"
          >
            <img
              src="images/Arquitectura de las computadoras.jpg"
              alt="Arquitectura de las computadoras"
              className="object-left h-48 w-full"
            />
          </CardHeader>

          <CardBody className="relative py-[0.5rem] px-[1rem] flex-grow">
            <Typography variant="h3" color="white">
              Programación OO
            </Typography>

            <div className="mt-2">
              <div className="w-1/2 inline-block">
                <div className="flex">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 mr-1 font-semibold"
                  >
                    Carreras:
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 font-normal"
                  >
                    Ingeniería de Software
                  </Typography>
                </div>
                <div className="flex">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 mr-1 font-semibold"
                  >
                    Semestre:
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 font-normal"
                  >
                    4to
                  </Typography>
                </div>
                <div className="flex">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 mr-1 font-semibold"
                  >
                    Profesor:
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 font-normal"
                  >
                    Carlos Alberto Olmos Trejo
                  </Typography>
                </div>
              </div>
              <div className="w-1/2 inline-block">
                <div className="flex">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 mr-1 font-semibold top-0"
                  >
                    Clave:
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 font-normal top-0"
                  >
                    1102
                  </Typography>
                </div>
                <div className="flex">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 mr-1 font-semibold"
                  >
                    Horario:
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 font-normal"
                  >
                    9:00 AM - 1:00 PM
                  </Typography>
                </div>
                <div className="flex">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 mr-1 font-semibold"
                  >
                    Costo:
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mt-2 font-normal"
                  >
                    $ 350
                  </Typography>
                </div>
              </div>
            </div>

            <div className="flex mb-2">
              <Typography
                variant="lead"
                color="white"
                className="mt-2 mr-1 font-semibold"
              >
                Tipo:
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mt-2 font-normal"
              >
                Programación e Ingeniería
              </Typography>
            </div>
          </CardBody>

          <hr color="white" />

          <CardFooter className="flex items-center justify-end p-0">
            <Button
              variant="text"
              color="white"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button
              variant="text"
              color="white"
              className="flex items self-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <Link href="/solicitud" className="text-xs">
                Registrar
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      <Card className="bg-azul-oscuro overflow-hidden w-[15rem] flex flex-col">
        <CardHeader color="transparent" className="m-0 rounded-none flex-grow">
          <img
            src="images/Arquitectura de las computadoras.jpg"
            alt="Arquitectura de las computadoras"
            className="object-left h-full w-full"
          />
        </CardHeader>

        <CardBody className="relative py-[0.5rem] px-[1rem] flex-grow">
          <Typography variant="h5" color="white">
            Electrónica y lógica
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="mt-1 font-normal text-xs"
          >
            Carreras: INF, SOF
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="mt-1 font-normal text-xs"
          >
            Semestre: 4to
          </Typography>
        </CardBody>

        <div className="relative bg-white left-[5px] w-[fill] h-[1px]" />

        <CardFooter className="flex items-center justify-left p-0">
          <Button
            onClick={handleOpen}
            variant="text"
            className="flex items-center text-white w-[80px] py-[0.5rem] pr-4 mr-4" // Adjusted margin-right here
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-[0.625rem]">Información</p>
          </Button>

          <Button
            variant="text"
            className="flex items-center justify-right text-white w-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <Link href="/solicitud" className="text-[0.625rem]">
              Registrar
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
