/*
El componente Favorites muestra la lista de criptomonedas favoritas. 
Para ello, obtiene la lista de favoritos del localStorage del navegador y 
muestra la información de las criptomonedas en una lista. 
Cada elemento de la lista es un enlace a la ruta /coin/:id, 
donde :id es el identificador de la criptomoneda. 
Si no hay criptomonedas favoritas, muestra un mensaje indicando que 
no hay criptomonedas favoritas.

recordamos la estructura del localStorage para guardar:
localStorage.setItem('clave', 'valor')
*/

/*
Si guardamos toda la información de cada criptomoneda en el localStorage, 
los datos de cada criptomoneda no se actualizarán automáticamente. 
Para solucionar esto, podemos usar el hook useEffect para hacer una petición 
a la API de CoinCap cada vez que se renderice el componente Favorites. 
Podemos filtrar las criptomonedas favoritas de la lista de criptomonedas 
que nos devuelve la API y mostrar solo las criptomonedas favoritas con la 
información actualizada.
*/

function Favorites() {
    return <h1>Favorites Page</h1>;
  }
  
  export default Favorites;