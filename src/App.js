import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar&Footer/NavBar';
import Footer from './components/NavBar&Footer/Footer';
import MenuData from './components/HomePage/MenuData';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage';
import CartPage from './components/CartPage/CartPage';
import { Provider } from 'react-redux';
import store from './components/Redux/CartStore';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      </Provider>
      <Footer/>
    </div>
  );
}

export default App;
