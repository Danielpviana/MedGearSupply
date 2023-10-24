import "./Home.css"
import { UserNavbar } from "../../components/userNavbar/UserNavbar";
import React, { useEffect, useState } from 'react';
import { Card } from "./components/Card";
import { ProductTypes } from "../../components/productTypes/ProductTypes";
import { ShoppingCart } from "./components/ShoppingCart";
import banner from '../../assests/images/banner.jpg'

export function Home() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';
    const [pokeList, setPokeList] = useState([]);

    const getPokeList = () => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo obtener la lista de Pokémon(código de error: ${response.status})`);
                }
                return response.json();
            })
            .then(data => {
                const pokemons = data.results;

                console.log(pokemons);
                setPokeList(pokemons);
            })
            .catch(error => {
                console.error(`Error: ${error.message}`);
            });
    }
    useEffect(() => {
        getPokeList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <UserNavbar></UserNavbar>
            <ShoppingCart></ShoppingCart>
            <div className="container--fluid" id="bg-image">
                <img className="banner-photo" src={banner} alt="banner" />
                <div className="top-left">
                    <h3>Bienvenido, Usuario</h3>
                    <h2>Categorías <span className="changecontent"></span></h2>
                    <p>Revisa aquí las mejores ofertas basadas en tus búsqueda.
                        <br />Productos de calidad a buen precio.
                    </p>
                    <h5>Descuentos especiales por ser cliente.</h5>
                </div>
            </div>
            <ProductTypes></ProductTypes>
            <div className="container" id="product-cards">
                <h1 className="text-center">PRODUCTOS</h1>
                <div className="row" id="product-row" style={{ marginTop: "50px" }}>

                    {pokeList.map((pokemon) => (

                        <Card url={pokemon.url} />

                    ))}
                </div>
            </div>
        </>
    );
}