import './Biografia.css'

function Biografia() {
  return (
    <div className="bio-container">
      <div className="bio-img">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600"
          alt="Fotografia de Sergio Silveti"
        />
      </div>
      <div className="bio-parrafo">
        <h2 className="bio-h2">¿Quién es Silveti?</h2>
        <p className="bio-p">
          Sergio Silveti es actor de teatro, cuentacuentos y servidor público.
          Nació y creció en este municipio, lo que le dio una visión cercana de
          las necesidades reales de su gente. Como Regidor en la administración
          pasada demostró que la política puede hacerse diferente — con escucha,
          con humor y con resultados concretos. Hoy da el siguiente paso porque
          cree que cada historia merece un mejor final.
        </p>
      </div>
    </div>
  )
}

export default Biografia
