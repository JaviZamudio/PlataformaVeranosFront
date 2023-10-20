import React from "react";

const LoginPage = () => {
  const bodyStyle = {
    overflow: "hidden",
  };

  return (
    <>
      <header className="bg-indigo-900 w-full fixed">
        <nav className="float-left overflow-hidden block p-1">
          <img src="/images/logo header.png" alt="" className="navlogo" />
        </nav>
      </header>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex">
          <div className="w-1/2 bg-gray-200 h-screen">
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-2xl">Login</h2>
              <form className="w-64 mt-6">
                <label htmlFor="username">Usuario:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="w-full p-2 border rounded my-1"
                />
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
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
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
