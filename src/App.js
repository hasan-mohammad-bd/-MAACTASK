
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
