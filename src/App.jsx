import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import PokeDex from "./pages/Pokedex";
import MyList from "./pages/MyList";
import PokeDetails from "./pages/Details";
import NotFound from "./pages/NotFound";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/pokedex" />
        </Route>
        <Route path="/pokedex" exact>
          <PokeDex />
        </Route>
        <Route path="/pokedex/:pokeId">
          <PokeDetails page="/pokedex" />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/mylist/:pokeId">
          <PokeDetails page="/mylist" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
