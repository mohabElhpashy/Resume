import "./App.css";
import Welcome from "../src/Components/Welcome/Welcome_page";
// import Nav from "../src/Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />

        {/* 
          <Route path="/login" exact component={Home} />
          <Route path="/post" exact component={Post} />
          <Route path="/allposts" exact component={Allposts} /> */}
      </Switch>
    </Router>
  );
}

export default App;
