import "./Footer.css"

export function Footer() {
    return (
        <footer id="footer" style={{ marginTop: "50px" }}>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <a href="index"><img src="https://raw.githubusercontent.com/Danielpviana/ProyectoWeb/main/Media/MedGearFW.png" id="footer-logo" width="32px" />MedGear</a>
                            <p>
                                Medellín <br />
                                Antioquia <br />
                                Colombia <br /><br />
                                <strong>Teléfono:</strong> +00000000000000 <br />
                                <strong>Email:</strong> info@medgear.supply.com <br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Accesos rápidos</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="index">Inicio</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="about">Nosotros</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="contact">Contacto</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="">Políticas de privacidad</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Productos y servicios</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="home">Dispositivos Médicos</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="home">Proveedores</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="home">Vestimentas</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Redes sociales</h4>
                            <div className="social-links mt-3">
                                <a href="" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>MedGear Supply</span></strong>. All Rights Reserved.
                </div>
                <div className="credits">
                    Designed by <a href="">Daniel Pérez</a>
                </div>
            </div>
        </footer>
    );
}