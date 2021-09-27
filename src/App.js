import logo from './logo.svg';
import './App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
import JsonPelicula from './peliculas.json'
import Paginacion from './Paginacion';

function App() {

  let peliculas = JsonPelicula;

  return (
    <PageWrapper>

      { peliculas.map( pelicula => 
         
         <Pelicula
          titulo={ pelicula.titulo }
          calificacion={ pelicula.calificacion }
          director={ pelicula.director }
          actores={ pelicula.actores }
          fecha={ pelicula.fecha }
          duracion={ pelicula.duracion }
          img={ pelicula.img }>
          { pelicula.descripcion }
        </Pelicula>

      )}

      <Paginacion pagina={ 2 } total={ 4 } onChange={ (pagina) => {
          console.log(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;
