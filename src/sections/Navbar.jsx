import './Navbar.css'

function Navbar (){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>SILVETI</h1>
                <p>Cada historia merece un mejor final.</p>
            </div>
            <ul className="navbar-links">
                <li>INICIO</li>
                <li>HISTORIA</li>
                <li>EVENTOS</li>
                <li>FUNDACION</li>
            </ul>
            <div>
                <button className="btn-sumate">Cuentame tu historia.</button>
            </div>

        </nav>
    );
}
export default Navbar;