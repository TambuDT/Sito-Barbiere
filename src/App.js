import mainbg from './assets/main-bg.jpg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import Maps from './components/Maps';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SidebarOpenButton from './components/SidebarOpenButton';

function App() {
  return (
    <div className='App'>
    <Navbar></Navbar>
    <SidebarOpenButton></SidebarOpenButton>
    <Sidebar></Sidebar>
    <Header></Header>
    <About></About>
    <Products></Products>
    <Maps></Maps>
    <Footer></Footer>
    </div>
  );
}

export default App;
