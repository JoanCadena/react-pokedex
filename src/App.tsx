import { Route, Navigate, Routes } from "react-router-dom";
import PokeDex from "./pages/Pokedex";
import MyList from "./pages/MyList";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate replace to="/pokedex" />} />
        <Route path="/pokedex" element={<PokeDex />} />
        <Route path="/pokedex/:pokeId" element={<Details page="/pokedex" />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/mylist/:pokeId" element={<Details page="/mylist" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
