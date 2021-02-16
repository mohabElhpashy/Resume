import "./App.css";
import Welcome from "../src/Components/Welcome/Welcome_page";
import Nav from "../src/Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Welcome />
    </div>
  );
}

export default App;
