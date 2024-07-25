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
            const httpResponse = await axios.get(baseURL);
            console.log(httpResponse);
        } catch (error) {
            console.error("An error occured", error);
        }
    };
    return (
        <div>
            <h1>App component</h1>
            <DemonstratingProps />
            <input
                placeholder="search"
                onChange={handleSearchInput}
                type="text"
                value={searchTerm}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default App;
