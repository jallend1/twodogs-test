import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Examples from './Components/Examples';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Main />
        <Examples />
      </div>
    </div>
  );
}

export default App;
