import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { NavBottom } from "./components/NavBottom";
import Popular from "./pages/Popular/Popular";
import Movies from "./pages/Movies";
import { DataProvider } from "./components/DataProvider";
import Search from "./pages/Search";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Popular} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/cart" component={Search} />
            </Switch>
          </Container>
        </div>
        <NavBottom />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
