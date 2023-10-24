import "./ProductTypes.css";
import desfibrilador from '../../assests/images/desfibrilador.jpg';
import monitorSV from '../../assests/images/monitor sv.png';
import electrobisturi from '../../assests/images/electrobisturi.png';
import vestimenta from '../../assests/images/vestimenta.png';


export function ProductTypes() {
    return (
        <>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row" id="t-cards">
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src={desfibrilador} alt="" />
                            <a href="home"><p>Desfibriladores</p></a>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src={monitorSV} alt="" />
                            <a href="home"><p>Monitores de signos vitales</p></a>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src={electrobisturi} alt="" />
                            <a href="home"><p>Electrobisturí</p></a>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src={vestimenta} alt="" />
                            <a href="home"><p>Vestimentas</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}