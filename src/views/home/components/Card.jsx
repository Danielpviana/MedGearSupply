import './Card.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = ({ url }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        // Función para obtener los datos del Pokémon
        const fetchPokemonData = async () => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`No se pudo obtener la lista de Pokémon(código de error: ${response.status})`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setPokemonData(data);
                })
                .catch(error => {
                    console.error(`Error: ${error.message}`);
                });
        };

        fetchPokemonData();
    }, [url]);

    if (!pokemonData) {
        return <div>Cargando...</div>;
    }

    const { name, id, abilities, sprites } = pokemonData;
    const imageUrl = sprites.front_default;

    return (
        <>
            <div className="col-md-3 py-3 py-md-0">
                <div className="card">
                    <img src={imageUrl} alt={name} />
                    <div className='card-body'>
                        <h3 className='text-center'>{name}</h3>
                        <h5>Número: {id}</h5>
                        <h5>Habilidad:</h5>
                        <ul>
                            {abilities.map((ability, index) => (
                                <li key={index}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
