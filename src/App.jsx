
import './App.css'
import { Login } from './components/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/nav/Nav';
import { Profile } from './components/profile/Profile';
import { Register } from './components/register/Register';


function App() {


  return <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
}

export default App
