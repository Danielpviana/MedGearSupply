import "./UserNavbar.css"
import logo from '../../assests/images/MedGearFW.png'
import user from '../../assests/images/login.png'

export function UserNavbar() {
    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="index" id="logo"><img src={logo} alt="" width="40px" style={{marginBottom: "10px", marginRight: "10px"}} id="logo-foto" />MedGear Supply</a>

                <form className="d-flex" role="search">
                    <input className="form-control" type="search" placeholder="Buscar productos" aria-label="Search" />
                    <button className="btn btn-search" type="submit">Buscar</button>

                    <div className="dropdown">
                        <a id="profile-drop" href="#" className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={user} alt="" id="login-logo" /></a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="">Perfil</a></li>
                            <li><a className="dropdown-item" href="">Carrito</a></li>
                            <li><a className="dropdown-item" href="">Historial de compras</a></li>
                            <li><a className="dropdown-item" href="">Configuración</a></li>
                            <li><a className="dropdown-item" href="">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </nav>
    );
}