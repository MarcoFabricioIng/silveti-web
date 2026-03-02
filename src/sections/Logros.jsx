import { Home, BookOpen, Hammer, Star } from 'lucide-react'
import TarjetaLogro from '../components/TarjetaLogro'
import './Logros.css'

function Logros() {
  return (
    <div className="logros-container">
      <h2 className="logros-titulo">Su trabajo como Regidor</h2>
      <div className="logros-grid">
        <TarjetaLogro
          icono={<Home size={80} strokeWidth={1.5} />}
          numero="120+"
          descripcion="Familias beneficiadas"
        />
        <TarjetaLogro
          icono={<BookOpen size={80} strokeWidth={1.5} />}
          numero="3"
          descripcion="Programas educativos implementados."
        />
        <TarjetaLogro
          icono={<Hammer size={80} strokeWidth={1.5} />}
          numero="50+"
          descripcion="Obras gestionadas en el municipio."
        />
        <TarjetaLogro
          icono={<Star size={80} strokeWidth={1.5} />}
          numero="5"
          descripcion="Años de servicio público."
        />
      </div>
    </div>
  )
}

export default Logros
