import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import LoginPage from "./pages/login";
import RegPage from "./pages/registration";
import CabPage from "./pages/cabinet";
import AddPage from "./pages/add";
import SearchPage from "./pages/search";
import InfCard from "./pages/infcard";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/cabinet'} element={<CabPage/>}/>
        <Route path={'/search'} element={<SearchPage/>}/>
        <Route path={'/add'} element={<AddPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/registration'} element={<RegPage/>}/>
        <Route path={'/infcard'} element={<InfCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
