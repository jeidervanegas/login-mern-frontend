import axios from 'axios'
import Swal from 'sweetalert2'
import { createContext, useContext, useState } from 'react'


//creamos el contexto
const UserContext = createContext()

//creamos el estado inicial
const initialState = { login: false, token: '', nick: '', names:'', surnames:'', id:'' }

// Creamos la funcion del proveedor
export const UserProvider = (props) => {
  // Creamos el estado del usuario
  const [user, setUser] = useState(() => {
    const session = localStorage.getItem('user');
    return session ? JSON.parse(session) : initialState
  })

  //creamos la funcion de login
  const loginUser = async (dataUser, navigate) => {
    try {
        //hacemps la peticion
        const { data } = await axios.post('http://localhost:3019/api/login', dataUser);

        console.log(data);

        //comprovamos si quedó bien el login
        if(data.ok) {
            //creamos un nuevo usuario para cambiar el estado inicial
            const userlogin = {
                login:true,
                token: data.data.token,
                names: data.data.names,
                nick: data.data.nick,
                email: data.data.email,
                surnames: data.data.surnames,
                id: data.data._id,
            }

            //guardamos el objeto en el localStorage
            localStorage.setItem('user', JSON.stringify(userlogin));

            //usamos el navigate
            navigate('/profile')

            //le asignamos el valor del nuevo objeto al hook de user
            setUser(userlogin);

            //capturamos  el mensaje de bienvenida
            Swal.fire({
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } catch (error) {
        if(!error.response?.data.ok) {
            return Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
        console.log('error en el frontend / funcion login', error.message);
    }
  }


  const registerUser = async (dataUser, navigate) => {
    try {
        //hacemps la peticion
        const { data } = await axios.post('https://login-mern-api-dev-ahgz.2.us-1.fl0.io/api/register', dataUser);

        console.log(data);

        //comprovamos si quedó bien el login
        if(data.ok) {
            //creamos un nuevo usuario para cambiar el estado inicial
            const userRegister = {
                login:true,
                token: data.data.token,
                name: data.data.name,
                nick: data.data.nick,
            }

            //guardamos el objeto en el localStorage
            localStorage.setItem('user', JSON.stringify(userRegister));

            //usamos el navigate
            navigate('/profile')
            
            //le asignamos el valor del nuevo objeto al hook de user
            setUser(userRegister);

            //capturamos  el mensaje de bienvenida
            Swal.fire({
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } catch (error) {
        if(!error.response.data.ok) {
            return Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
        console.log('error en el frontend / funcion register', error.message);
    }
  }


  //creamos la funcion para cerrar sesion
  const exit = () => {
    setUser(initialState);
    localStorage.removeItem('user');
  }
  //exportar las funciones
  const value = {
    loginUser,
    registerUser,
    user,
    exit
  }

  return <UserContext.Provider value={value} {...props}/>
}

export function useUser() {
    const context = useContext(UserContext);
    if(!context){
        throw new Error('useUser error');
    }
    return context;
}
