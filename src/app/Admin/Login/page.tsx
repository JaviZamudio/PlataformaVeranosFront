"use client";
import React, { useState } from "react";

const LoginPage = () => {
  const bodyStyle = {
    overflow: "hidden",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("authToken", data.data);

        // Redireccionar al dashboard del admin

        alert("Login correcto");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error de red:", error);
      setErrorMessage("Error de red");
    }
  };

  return (
    <>
      <header className="bg-indigo-900 w-full fixed">
        <nav className="float-left overflow-hidden block p-1">
          <img src="/images/logoHeader.png" alt="" className="navlogo" />
        </nav>
      </header>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex">
          <div className="w-1/2 bg-gray-200 h-screen">
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-2xl">Login</h2>
              <form className="w-64 mt-6" onSubmit={handleLogin}>
                <label htmlFor="username">Usuario:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border rounded my-1"
                />
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded my-1"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-indigo-900 text-white p-2 rounded mt-4 cursor-pointer hover:bg-indigo-700"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2 bg-cover bg-center h-screen image-container">
            <img
              src="/images/login admin image.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className="mt-4 text-red-500">{errorMessage}</div>
      )}
    </>
  );
};

export default LoginPage;