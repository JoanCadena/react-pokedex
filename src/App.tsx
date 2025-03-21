import { Route, Navigate, Routes } from "react-router";
import PokeDex from "./pages/Pokedex";
import MyList from "./pages/MyList";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/pokedex" />} />
          <Route path="/pokedex" element={<PokeDex />} />
          <Route path="/mylist" element={<MyList />} />
          <Route
            path="/pokedex/:pokeId"
            element={<Details page="/pokedex" />}
          />
          <Route path="/mylist/:pokeId" element={<Details page="/mylist" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
