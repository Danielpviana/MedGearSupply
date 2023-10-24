import './Contact.css';
import { Navbar } from '../../components/navbar/Navbar';
import { ContactUs } from '../../components/contactUs/ContactUs'

export function Contact() {
    return (
        <>
            <Navbar></Navbar>
            <ContactUs></ContactUs>
        </>
    );
}