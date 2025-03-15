/*
El componente Home es el componente principal de nuestra aplicación. 
Este componente muestra la lista de las principales criptomonedas del mercado. 
Para ello, hace una petición a la API de CoinCap y muestra la información de
las criptomonedas en una lista. 
Cada elemento de la lista es un enlace a la ruta /coin/:id, donde :id es 
el identificador de la criptomoneda. 
*/

function Home(){
    return(
      <>
        <h1>Lista de las principales criptomonedas del mercado</h1>
    
      </>
    )
  }
  export default Home;