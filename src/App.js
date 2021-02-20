import "./App.css";
import { Component } from "react";

import Welcome from "../src/Components/Welcome/Welcome_page";
import Nav from "../src/Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

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
    }, 6000);
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
        </Switch>
      </Router>
    );
  }
}

export default App;
