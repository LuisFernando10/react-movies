import logo from './logo.svg';
import './App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
import JsonPelicula from './peliculas.json'
import Paginacion from './Paginacion';
import {useState} from "react";

function App() {

    // Hook
    const [ paginaActual, setPaginaActual ] = useState( 1 );

    // Variables
    const total_page = 3;
    let peliculas = JsonPelicula;

    const searchMovie = async () => {
       let url = 'https://lucasmoy.dev/data/react/peliculas.json';

       const result_movies = await fetch( url, {
           'method': 'GET',
           'headers': {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           }
       });

       const json_result = await result_movies.json();

       console.log(json_result)
    }
    searchMovie();

    const loadMovies = () => {
        peliculas = peliculas.slice(
            ( paginaActual - 1 ) * total_page,
            paginaActual * total_page
        );
    };

    const getTotalPages = () => {
        let total_movie = JsonPelicula.length;
        return Math.ceil( total_movie / total_page );
    }

    loadMovies();

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

      <Paginacion pagina={ paginaActual } total={ getTotalPages() } onChange={ (pagina) => {
          setPaginaActual( pagina );
      }} />

    </PageWrapper>
  );
}

export default App;
