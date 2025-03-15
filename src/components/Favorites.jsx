import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);

        const fetchCryptos = async () => {
            try {
                const response = await fetch('https://api.coincap.io/v2/assets');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de criptomonedas');
                }
                const data = await response.json();
                const filteredCryptos = data.data.filter(crypto => 
                    savedFavorites.some(fav => fav.id === crypto.id)
                );
                setCryptos(filteredCryptos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCryptos();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    if (favorites.length === 0) return <p>No hay criptomonedas favoritas</p>;

    return (
        <div className='list-container'>
            <h1>Mis Criptomonedas Favoritas</h1>
            <ul>
                {cryptos.map(crypto => (
                    <li key={crypto.id}>
                        <Link to={`/coin/${crypto.id}`}>
                            {crypto.rank}. {crypto.name} ({crypto.symbol}) - ${parseFloat(crypto.priceUsd).toFixed(2)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
