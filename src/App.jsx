import { DemonstratingProps } from "./components/demo/DemonstratingProps";
// @ts-ignore - supress an error about import.meta
const baseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
    return (
        <div>
            <h1>App component</h1>
            <DemonstratingProps />
            <h1>{baseURL}</h1>
        </div>
    );
}

export default App;
