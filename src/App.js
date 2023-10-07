import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Header from "./components/Header/Header";
import PartnersLogo from "./components/partener/PartnersLogo";
import Footer from "./components/Footer/Footer";
import Clients from "./components/clients/Clients";
import Info from "./components/Info/Info";
import ProductsDatails from "./components/Products/ProductsDatails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="info" element ={<Info/>}/>
        <Route path="parteners" element={<PartnersLogo />} />
        <Route path="clients" element={<Clients/>} />
        <Route path="products" element={<ProductsDatails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
