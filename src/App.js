import "./App.css";
import { Component } from "react";

import Welcome from "../src/Components/Welcome/Welcome_page";
import Nav from "../src/Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Aboutme from "../src/Components/AboutMe/AboutMe";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loading_page: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading_page: false,
      });
    }, 1000);
  }
  render() {
    return this.state.loading_page ? (
      <div className="App">
        <HashLoader className="load" />
      </div>
    ) : (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/Aboutme" exact component={Aboutme} />
          Aboutme
        </Switch>
      </Router>
    );
  }
}

export default App;
