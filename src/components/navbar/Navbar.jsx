import "./Navbar.css"
import bootstrap from 'bootstrap'

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="index" id="logo"><img src="https://raw.githubusercontent.com/Danielpviana/ProyectoWeb/main/Media/MedGearFW.png" alt="" width="40px" style={{ marginBottom: "10px", marginRight: "10px" }} id="logo-foto" />MedGear Supply</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="home">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}