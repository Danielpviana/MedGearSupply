import './Logup.css'
import { Navbar } from "../../components/navbar/Navbar";

export function Logup() {
    return (
        <>
            <Navbar></Navbar>
            <div className="form">
                <div className="form-content">
                    <div id="signup">
                        <h1>Regístrese gratis</h1>
                        <form action="/" method="post" id="signup-form">
                            <div className="top-row">
                                <div className="field-wrap">
                                    <input type="text" placeholder="Nombre" id="firstName" required />
                                </div>
                                <div className="field-wrap">
                                    <input type="text" placeholder="Apellido" id="lastName" required />
                                </div>
                            </div>
                            <div className="field-wrap">
                                <input type="email" placeholder="Ingrese su email" id="signupEmail" required />
                            </div>
                            <div className="field-wrap">
                                <input type="password" placeholder="Cree su contraseña" id="signupPassword" required />
                            </div>
                            <div className="field-wrap">
                                <input type="password" placeholder="Confirme su contraseña" id="confirmPassword" required />
                            </div>
                            <div className="field-wrap">
                                <input type="text" placeholder="Ingrese su dirección" id="address" required />
                            </div>
                            <p className="forgot"><a href="login">¿Ya tiene una cuenta?</a></p>

                            <a href="#" className="button-link">
                                <button className="button button-block" id="signup-button">Crear cuenta</button>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}