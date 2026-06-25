import { createContext, useEffect, useState } from "react"

export const UsuarioContext = createContext()

export const UsuarioProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(() => {

    const usuarioGuardado = localStorage.getItem("usuario")

    return usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : {
          nombre: "Martín Argota",
          dni: "12345678",
          rol: "Alumno",
          institucion: "Facultad de Ingeniería - UNJu"
        }

  })

  useEffect(() => {

    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    )

  }, [usuario])

  const actualizarPerfil = (nuevoUsuario) => {
    setUsuario(nuevoUsuario)
  }

  return (

    <UsuarioContext.Provider
      value={{
        usuario,
        actualizarPerfil
      }}
    >

      {children}

    </UsuarioContext.Provider>

  )

}