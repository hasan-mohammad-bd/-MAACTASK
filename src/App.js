
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';
import RegistrationFull from './components/registration/RegistrationFull';
import LoginFull from './components/login/LoginFull';
import Dashboard from './components/dashboard/Dashboard';
import Region from './components/dashboard/Region';
import Area from './components/dashboard/Area';


function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LoginFull></LoginFull>}></Route>
        <Route path='/registration' element={<RegistrationFull></RegistrationFull>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index path='region' element={<Region></Region>}></Route>
          <Route path ='area' element={<Area></Area>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
