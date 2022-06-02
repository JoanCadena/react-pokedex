import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import PokeDex from "./pages/Pokedex";
import PokeDetails from "./pages/Details";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/pokedex" />
      </Route>
      <Route path="/pokedex" exact>
        <PokeDex />
      </Route>
      <Route path="/pokedex/:pokeId">
        <PokeDetails />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
