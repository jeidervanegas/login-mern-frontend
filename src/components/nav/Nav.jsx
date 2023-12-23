import { Link } from 'react-router-dom'
import './nav.css'
import React from 'react'
import { useUser } from '../../context/UserContext'
import logo from '../img/logo.png';

export const Nav = () => {

    const { user, exit } = useUser();

  return (
    <div className='nav'>
        <div className='nav-container'>
            <div className='nav-flex'>
                <div className='nav-logo'>
                    <Link className='logo'>
                        <img className='logo' src={logo} alt="" />
                        <div>
                            <p className='logo-text'>Artista <span className='logo-span'>Latino</span></p>
                        </div>
                    </Link>
                </div>
                {user.login ? (
                    <ul>
                        <li className='nav-menu'>
                            <Link className='nav-li'>Bienvenido/a {user.nick}</Link>
                            <Link to='/' onClick={exit} className='nav-li'>Salir</Link>
                        </li>
                    </ul>
                ): (
                    <ul>
                        <li className='nav-menu'>
                            {/* <Link className='nav-li'>Nosotros</Link> */}
                            {/* <Link className='nav-li'>Registro</Link> */}
                        </li>
                    </ul>
                )}

            </div>
        </div>
    </div>
  )
}
