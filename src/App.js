import logo from './logo.svg';
import './App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
import JsonPelicula from './peliculas.json'

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

    </PageWrapper>
  );
}

export default App;
