import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Navigation className="nav" />
      <Home />
    </div>
  );
}

export default App;
