import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Examples from './Components/Examples';
import Pricing from './Components/Pricing';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Main />
        <Examples />
        <Pricing />
        <About />
      </div>
    </div>
  );
}

export default App;
