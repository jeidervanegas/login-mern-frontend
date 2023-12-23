import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './login.css'
import React, { useState } from 'react'
import { Register } from '../register/Register';


export const Login = () => {
  const navigate = useNavigate();

  const [dataUser, setDataUser] = useState({email:'', password:''});
  const [modal, setModal] = useState(false);

  const handleOnChange = (e) => {
    setDataUser({...dataUser, [e.target.name]: e.target.value})
  }

  const { loginUser } = useUser();

  const login = (e) => {
    e.preventDefault();
    loginUser(dataUser, navigate)
  }

  const handleRegister = () => {

    setModal(true)
  }

  return (
    <main className="main">

      <div className='main-card'>
        <div className='main-title'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="72" height="72" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
        </div>
        <div className='main-container'>
          <form onSubmit={login} className='main-form'>
            <div className='main-buttons'>
              <ul className='buttons-container'>
                <Link to='/' className='button-item select'>Iniciar sesión</Link>
                <Link onClick={handleRegister} to='/register'  className='button-item' >Registrarse</Link>
              </ul>
            </div>
            <div className='main-flex'>
              <div className='main-camp'>
                <label className='main-label' htmlFor="">Correo</label>
                <input 
                  className='main-input' type="text" 
                  placeholder='Ingresa tu correo'
                  name='email'
                  onChange={handleOnChange}
                />
              </div>

              <div className='main-camp'>
                <label className='main-label' htmlFor="">Contraseña</label>
                <input 
                  className='main-input' type="password" 
                  placeholder='Ingresa tu contraseña'
                  name='password'
                  onChange={handleOnChange}

                />
              </div>
              {/* <div className='main-camp'>
                <label className='main-label' htmlFor="">Contraseña</label>
                <input 
                  className='main-input' type="password" 
                  placeholder='Ingresa tu contraseña'
                  name='password'
                  onChange={handleOnChange}

                />
              </div> */}
            </div>
            

            <button className='main-button'>Ingresar</button>

          </form>
        </div>
      </div>
      {modal && 
        <Register
        
        />
      }
    </main>
  )
}
