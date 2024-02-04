"use client";
import React, { useContext, useState } from "react";
import { useRouter } from 'next/navigation';
import AdminHeader from "@/components/HeaderAdmin";
import { Button, Input } from "@nextui-org/react";
import { HOST } from "@/configs";
import Image from "next/image";
import { AuthContext } from "@/contexts/AuthContext";

const LoginPage = () => {
  const router = useRouter()
  const { login } = useContext(AuthContext);
  const bodyStyle = {
    overflow: "hidden",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resBody = await fetch(`${HOST}/api/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(res => res.json())


    if (resBody.code !== "OK") {
      const errorData = await resBody.message
      setErrorMessage(errorData.message);
      alert("Usuario y/o contraseña incorrectos");
      console.log(resBody)
      return;
    }

    alert("Login correcto");
    login(resBody.data);
  };

  return (
    <>
      {/* Main */}
      <div className="flex grow justify-stretch items-stretch bg-gray-100">
        {/* Login form*/}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-2xl">Login</h2>
          <form className="w-full max-w-xs mt-6 flex flex-col gap-4" onSubmit={handleLogin}>
            <Input
              label="Usuario"
              placeholder="Escribe tu usuario"
              variant="bordered"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isRequired
            />
            <Input
              label="Contraseña"
              placeholder="Escribe tu contraseña"
              variant="bordered"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isRequired
            />
            <Button
              type="submit"
              color="primary"
              className="w-full mt-2"
            >
              Iniciar sesión
            </Button>

            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </form>
        </div>
        <Image
          src="/images/login admin image.jpg"
          alt=""
          className="w-1/2 grow object-cover"
          priority
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};

export default LoginPage;