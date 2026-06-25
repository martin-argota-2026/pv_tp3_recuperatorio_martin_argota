const RegistroActividad = ({ fecha }) => {
  if (!fecha) {
    return null
  }

  return (
    <div>
      <p>{fecha}</p>
    </div>
  )
}

export default RegistroActividad