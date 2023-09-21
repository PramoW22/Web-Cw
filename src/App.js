import logo from './logo.svg';
import './App.css';
import Navbar from './component/molecules/Navbar';
import NavItem from './component/atoms/NavItem';
import Home from './page/Home';
import Shop from './page/Shop';
import Footer from './component/molecules/Footer';
import{BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Exp from './page/example/Exp';
import Gallery from './page/Gallery';
import About_Us from './page/About_Us';
function App() {
  return (
    <div className='App'>
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/shop" element={<Shop/>} /> 
       <Route exact path="/Gallery" element={<Gallery/>}/>
       <Route exact path="/About_Us" element={<About_Us/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

