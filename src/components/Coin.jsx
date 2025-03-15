/*
El componente Coin muestra información detallada sobre una criptomoneda en particular. 
Para ello, hace una petición a la API de CoinCap y muestra la información de la 
criptomoneda en un formato más detallado.
url de ejemplo: https://api.coincap.io/v2/assets/bitcoin
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Coin.css';

function Coin() {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isFavorite, setIsFavorite ] = useState(false);

    useEffect(() => {
    console.log("ID recibido en Coin.jsx:", id); 
        
        if (!id) {
            setError('ID de criptomoneda no válido');
            setLoading(false);
            return;
        }
        const fetchCoin = async () => {
            try {
                const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener la criptomoneda');
                }
                const data = await response.json();
                setCoin(data.data);

                // Verifica si está en favoritos
                const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                setIsFavorite(favorites.some(fav => fav.id === data.data.id));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCoin();
    }, [id]);

    const favorite = () => {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (isFavorite) {
          favorites = favorites.filter(fav => fav.id !== coin.id);
      } else {
          favorites.push(coin);
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
  };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!coin) return <p>No se encontró la criptomoneda</p>;

    return (
      <div className="coin-card">
          <h1>Detalle de la criptomoneda</h1>
          <h2>{coin.name.toUpperCase()}</h2>
          <p><strong>Id:</strong> {coin.id}</p>
          <p><strong>Ranking:</strong> {coin.rank}</p>
          <p><strong>Symbol:</strong> {coin.symbol}</p>
          <p><strong>Price USD:</strong> ${parseFloat(coin.priceUsd).toFixed(2)}</p>
          <button onClick={favorite}>
              {isFavorite ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
          </button>
      </div>
  );
}

export default Coin;

