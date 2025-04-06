import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import Headnav from './components/Navbar/Nav'
import Content from './components/Header/Content';

import UserList from './components/Users/Users';

import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Taskparent from './components/TaskParent/taskparent';
function App() {
  

  return (
    <>
     <Headnav/>
     <Content/>
     <UserList></UserList>

     <Taskparent/>
     <Register></Register>
     <Footer/>
    </>
  )
}

export default App
