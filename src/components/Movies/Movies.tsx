import { useState, useEffect } from "react";
import Modal from "../MovieModal/movieModal";
import SearchBar from "../SearchBar/SearchBar";
interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    console.log(movie);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

      const response = await fetch(
        `http://localhost:3000/api/v1/movies/search?movie=${query}`
      );
      const data: Movie[] = await response.json();
      setMovies(data);
    
  };

  useEffect(() => {
    
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch("http://localhost:3000/api/v1/movies/list");
    const data: MovieList = await response.json();
    setMovies(data.results);
  }
  return (
    <>
      <h1>Movie List App</h1>
  <SearchBar onSearch={handleSearch}></SearchBar>
     

      <div className="grid-container">
        {movies.map((movie) => (
          <div
            className="grid-item"
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{new Date(movie.release_date).getFullYear()}</p>
              {/* <p>{movie.genre_ids.join(", ")}</p> */}
            </div>
          </div>
        ))}
        {selectedMovie && (
          <Modal movie={selectedMovie} onClose={handleModalClose} />
        )}
      </div>
    </>
  );
}

export default Movies;
