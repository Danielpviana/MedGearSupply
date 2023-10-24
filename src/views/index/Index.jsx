import './Index.css';
import { Navbar } from '../../components/navbar/Navbar';
import { AboutUs } from '../../components/aboutUs/AboutUs';
import { ContactUs } from '../../components/contactUs/ContactUs';
import { ProductTypes } from '../../components/productTypes/ProductTypes';
import banner from '../../assests/images/banner.jpg'

export function Index() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container--fluid" id="bg-image">
                <img className="banner-photo" src={banner} alt="banner" />
                <div className="top-left">
                    <h3>Las mejores ofertas</h3>
                    <h2>Categorías <span className="changecontent"></span></h2>
                    <p>Aquí encontrarás todos los equipos médicos que necesesites.
                        <br />Encuentra el mejor postor con el mejor precio.
                    </p>
                    <h5> Hasta 50% de descuento.</h5>
                    <a href="login" className="btn">Inicia sesión</a>
                </div>
            </div>
            <ProductTypes></ProductTypes>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </>
    );
}