
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import RegistrationFull from './components/registration/RegistrationFull';
import LoginFull from './components/login/LoginFull';


function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LoginFull></LoginFull>}></Route>
        <Route path='/registration' element={<RegistrationFull></RegistrationFull>}></Route>
      </Routes>

    </div>
  );
}

export default App;
