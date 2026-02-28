import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-nombre">SILVETI</h1>
        <p className="hero-slogan">Cada historia merece un mejor final.</p>
        <div className="hero-botones">
          <button className="btn-primario">Conoce su historia</button>
          <button className="btn-secundario">Súmate</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;