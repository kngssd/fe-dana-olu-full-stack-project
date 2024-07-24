import { DemonstratingProps } from "./components/demo/DemonstratingProps";
import React from "react";

// @ts-ignore - supress an error about import.meta
const baseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
    const [searchTerm, setSearchTerm] = React.useState("");

    function handleSearchInput(event) {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
    }

    function handleSearch() {}
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
