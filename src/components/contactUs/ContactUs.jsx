import "./ContactUs.css";
import location from '../../assests/images/location.png';
import phone from '../../assests/images/phone.png';
import email from '../../assests/images/email.png';

export function ContactUs() {
    return (
        <>
            <div className="container" id="contact">
                <h2>CONTACTO</h2>
                <hr />
                <div className="row">
                    <div className="col-md-4 py-3 py-md-0">
                        <img src={location} alt="" width="60px" />
                        <p>Medellín, Antioquia. Colombia.
                            <br /><strong>Dirección:</strong> ipsum dolor sit amet.
                        </p>
                    </div>

                    <div className="col-md-4 py-3 py-md-0">
                        <img src={phone} alt="" width="60px" />
                        <p><strong>Fijo: </strong>+0000000000000000
                            <br /><strong>WhatsApp: </strong>+0000000000000000
                        </p>
                    </div>

                    <div className="col-md-4 py-3 py-md-0">
                        <img src={email} alt="" width="60px" />
                        <p>info@medgear.supply.com
                            <br />contact@medgear.supply.com
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6 py-3 py-md-0">
                        <div className="form-group">
                            <input type="text" className="form-control" id="usr" placeholder="Nombre y apellidos" />
                        </div>
                        <div className="form-group">
                            <input type="phone" className="form-control" id="phn" placeholder="Número de teléfono" />
                        </div>
                    </div>

                    <div className="col-md-6 py-3 py-md-0">
                        <div className="form-group">
                            <input type="email" className="form-control" id="eml" placeholder="Correo electrónico" />
                        </div>
                        <div className="form-group">
                            <input type="subject" className="form-control" id="sbj" placeholder="Asunto" />
                        </div>
                    </div>

                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="5" id="comment" placeholder="Deje su mensaje aquí"></textarea>

                </div>
                <div id="message"><button>Enviar mensaje</button></div>

            </div>


        </>
    );
}