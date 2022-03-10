import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Shop from "./pages/shop";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header name="In The Noods"/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />} />
            </Routes>
          </div>
          <div>
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
