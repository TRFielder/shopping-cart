import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer";
import Shop from "./pages/shop";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header name="Ramen Rider"/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />} />
            </Routes>
          </div>
        </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
