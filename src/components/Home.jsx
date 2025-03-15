
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setCryptos(data.data.slice(0, 10)); // Solo traemos la 10 primeras Cryptos
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div className='list-container'>
      <h1>Lista de Criptomonedas</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {cryptos.map((crypto) => (
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

export default Home;
