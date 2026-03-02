import './TarjetaLogro.css'

function TarjetaLogro({ numero, descripcion, icono }) {
  return (
    <div className="tarjeta-logro">
      <h2 className="tarjetaLogro-icono">{icono}</h2>
      <h1 className="tarjetaLogro-numero">{numero}</h1>
      <h3 className="tarjetaLogro-desc">{descripcion}</h3>
    </div>
  )
}
export default TarjetaLogro
