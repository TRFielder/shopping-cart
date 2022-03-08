import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer";
import Shop from "./pages/shop";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header name="Shopping cart"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
