import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
// import './login.css'
import React, { useState } from 'react'
import './register.css';
import imgeClose from '../img/close.png'


export const Register = () => {
  const navigate = useNavigate();

  const [dataUser, setDataUser] = useState({email:'', password:'', names:'', surnames:'', nick: ''});

  const handleOnChange = (e) => {
    setDataUser({...dataUser, [e.target.name]: e.target.value})
  }

  const { registerUser } = useUser();

  const register = (e) => {
    e.preventDefault();
    
    registerUser(dataUser, navigate)
  }

  // const closeModal = () => {
  //   <Link to='/'></Link>
  // }


  return (
    <main className="main-r">
      <div className='close-modal'>
        <Link to='/'>
          <img  src={imgeClose} alt="" />
        </Link>
      </div>
      <div className='main-card-r'>
        <div className='main-title-r'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="72" height="72" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
        </div>
        <div className='main-container-r'>
          <form onSubmit={register} className='main-form-r'>
            <div className='main-buttons-r'>
              <ul className='buttons-container-r'>
                <Link to='/' className='button-item-r'>Iniciar sesión</Link>
                <Link to='/register'  className='button-item-r select-r'>Registrarse</Link>
              </ul>
            </div>
            <div className='main-flex-r'>
              <div className='main-camp-r'>
                <label className='main-label-r' htmlFor="">Nombres</label>
                <input 
                  className='main-input-r' type="text" 
                  placeholder='Ingresa tus nombres'
                  name='names'
                  onChange={handleOnChange}
                />
              </div>

              <div className='main-camp-r'>
                <label className='main-label-r' htmlFor="">Apellidos</label>
                <input 
                  className='main-input-r' type="text" 
                  placeholder='Ingresa tus apellidos'
                  name='surnames'
                  onChange={handleOnChange}

                />
              </div>
              <div className='main-camp-r'>
                <label className='main-label-r' htmlFor="">Correo</label>
                <input 
                  className='main-input-r' type="email" 
                  placeholder='Ingresa tu correo'
                  name='email'
                  onChange={handleOnChange}

                />
              </div>
              <div className='main-camp-r'>
                <label className='main-label-r' htmlFor="">Contraseña</label>
                <input 
                  className='main-input-r' type="password" 
                  placeholder='Ingresa tu contraseña'
                  name='password'
                  onChange={handleOnChange}

                />
              </div>
              <div className='main-camp-r'>
                <label className='main-label-r' htmlFor="">Apodo</label>
                <input 
                  className='main-input-r' type="text" 
                  placeholder='Ingresa tu nick o usuario'
                  name='nick'
                  onChange={handleOnChange}

                />
              </div>
            </div>
            

            <button type='submit' className='main-button-r'>Registrarse</button>

          </form>
        </div>
      </div>
    </main>
  )
}
