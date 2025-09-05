import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar&Footer/NavBar';
import Footer from './components/Navbar&Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CartPage from './components/Redux/CartPage';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
