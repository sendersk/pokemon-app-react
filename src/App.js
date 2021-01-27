import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList/PokemonList";
import Pokemon from "./containers/Pokemon/Pokemon";
import { Navigation, NavigationLink } from "./common/Navigation/styled";
import { Container } from "./common/Container/styled";

function App() {
  return (
    <Container>
      <Navigation>
        <NavigationLink to={"/"}>Home</NavigationLink>
      </Navigation>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </Container>
  );
}

export default App;
