import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import Headnav from './components/Navbar/Nav'
import Content from './components/Header/Content';
import About from './components/About/About';
import Skills from './components/Skills/Skils';
import Gallry from './components/Gallary/Gallary';
import Footer from './components/Footer/Footer';
function App() {
  

  return (
    <>
     <Headnav/>
     <Content/>

     <About/>
     <Skills/>
     <Gallry/>
     <Footer/>
    </>
  )
}

export default App
