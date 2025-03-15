/*
El componente Coin muestra información detallada sobre una criptomoneda en particular. 
Para ello, hace una petición a la API de CoinCap y muestra la información de la 
criptomoneda en un formato más detallado.
url de ejemplo: https://api.coincap.io/v2/assets/bitcoin
*/

/*
Botón para añadir o quitar la criptomoneda de la lista de favoritos. 
Esta lista se guarda en el localStorage del navegador con el nombre favorites. 
Se puede guardar solo el id de la criptomoneda o el objeto completo.
*/

function Coin(){
    return(
      <>
        <h1>Detalle de la criptomoneda</h1>

      </>
    )
  }
  export default Coin;