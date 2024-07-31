import React from "react";
import axios from "axios";
import MovieCard from "./components/demo/MovieCard";
import { baseURL } from "./api";

function App() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [movieList, setMovieList] = React.useState([]);
    const [movieToDisplay, setMovieToDisplay] = React.useState({});

    function handleSearchInput(event) {
        setSearchTerm(event.target.value);
    }

    const handleSearch = async () => {
        try {
            const httpResponse = await axios.get(
                `${baseURL}/movies/search?searchTerm=${searchTerm}`,
            );
            setMovieList(httpResponse.data);
        } catch (error) {
            console.error("An error occured", error);
        }
    };

    function handleChooseMovie(event) {
        getMovieById(event.target.id);
    }

    const getMovieById = async (id) => {
        try {
            const httpResponse = await axios.get(`${baseURL}/movies/${id}`);
            setMovieToDisplay(httpResponse.data[0]);
        } catch (error) {
            console.error("error", error);
        }
    };

    const movieDisplay = movieList.map((movie) => {
        return (
            <div
                key={movie.id}
                onClick={handleChooseMovie}
                onKeyDown={handleChooseMovie}
                id={movie.id}
            >
                {movie.name}
            </div>
        );
    });

    return (
        <div>
            <h1>Movie App</h1>
            {movieToDisplay ? (
                <MovieCard movieData={movieToDisplay} />
            ) : (
                <p>Select a movie</p>
            )}
            <input
                placeholder="search"
                onChange={handleSearchInput}
                type="text"
                value={searchTerm}
            />
            <button onClick={handleSearch}>Search</button>
            {movieDisplay}
        </div>
    );
}

export default App;
