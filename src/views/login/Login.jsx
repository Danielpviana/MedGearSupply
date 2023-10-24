import './Login.css'
import { Navbar } from '../../components/navbar/Navbar';

export function Login() {
    return (
        <>
            <Navbar></Navbar>
            <div className="form">
                <div className="form-content">
                    <div id="login">
                        <h1>Bienvenido de vuelta</h1>
                        <form action="/" method="post" id="login-form">
                            <div className="field-wrap">
                                <input type="email" placeholder="Email" id="email" required />
                            </div>
                            <div className="field-wrap">
                                <input type="password" placeholder="Contraseña" id="password" required />
                            </div>
                            <p className="forgot"><a href="#">¿Olvidó su contraseña?</a><br /><a href="logup">Cree su cuenta</a></p>
                            <a href="#" className="button-link">
                                <button className="button button-block" id="login-button">Iniciar sesión</button>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}