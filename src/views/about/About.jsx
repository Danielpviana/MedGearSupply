import './About.css';
import { Navbar } from '../../components/navbar/Navbar';
import { AboutUs } from '../../components/aboutUs/AboutUs';

export function About() {
    return (
        <>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
        </>
    );
}