import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./screens/HomeScreen";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
