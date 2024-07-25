import { DemonstratingProps } from "./components/demo/DemonstratingProps";
import React from "react";
import axios from "axios";

// @ts-ignore - supress an error about import.meta
const baseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [movieList, setMovieList] = React.useState([]);

    function handleSearchInput(event) {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
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

    const movieDisplay = movieList.map((movie) => {
        return (
            <>
                <div>{movie.name}</div>
            </>
        );
    });

    return (
        <div>
            <h1>Test App</h1>
            {/* <DemonstratingProps /> */}
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
