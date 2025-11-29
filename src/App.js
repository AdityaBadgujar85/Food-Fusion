import "./App.css";
import NavBar from "./components/NavBar&Footer/NavBar";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Redux/CartStore";

const Footer = lazy(() => import("./components/NavBar&Footer/Footer"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage"));
const AboutPage = lazy(() => import("./components/AboutPage/AboutPage"));
const CartPage = lazy(() => import("./components/CartPage/CartPage"));
const InfoPage = lazy(() => import("./components/HomePage/InfoPage"));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Suspense fallback={<div className="page-loader"><div className="loader"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/info/:id" element={<InfoPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
