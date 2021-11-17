import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import AllProjects from "./components/AllProjects/AllProjects";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/all-projects">
            <AllProjects />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
