import { useEffect, useRef, useState } from 'react'
import './profile.css'
import userImage from '../img/artist.jpg'
import { useUser } from '../../context/UserContext'
import ListOfArticles from '../ListOfArticles'
import Swal from 'sweetalert2'
import axios from 'axios'

export const Profile = () => {
  const [articles, setArticles] = useState([])
  const input = useRef()
  const { user } = useUser()

  //
  // useEffect(() => {
  //   if (user?.id !== '') refresh()
  // }, [user?.id])

  //
  const refresh = () =>
    axios
      .get(`https://login-mern-api-dev-ahgz.2.us-1.fl0.io/api/posts/${user.id}`)
      .then(({ data }) => setArticles(data.data))

  //
  // function handleSubmit(e) {
  //   e.preventDefault()

  //   const formData = new FormData(e.target)

  //   const data = new FormData()

  //   data.append('imagen', input.current.files[0])
  //   data.append('title', formData.get('title'));
  //   data.append('description', formData.get('description'));

  //   axios.post('http://localhost:3010/api/post/new', data, {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`
  //     },
  //   })
  //   .then(({ data }) => {
  //     refresh()
  //     e.target.reset()
  //      Swal.fire({
  //       icon: 'success',
  //       title: data.data.message,
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   })
  // }

  return (
    <main className="info flex justify-center items-center">
      {/* <div className='info-container bg-red-300'>
        <div className='card-uno'>
            <div className='avatar'>
              <img className='avatar-img' src={userImage} alt="" />
              <p className='avatar-nick'> <span>{user.nick }</span></p>
            </div>
            <div>

            </div>
        </div>

          <div className='card-dos'>
              <p className='avatar-nick'>Correo de contacto: <span className='avatar-span'>{user.email }</span></p>
              <p className='avatar-nick'>Nombre completo: <span className='avatar-span'>{user.names } {user.surnames}</span></p>
          </div>
      </div> */}
      <h1>Bienvenido</h1>
      {/* 
      <div>
        <form  action="/profile" method="post" encType="multipart/form-data">
          <input type="text" name="title" placeholder="Título" required />
          <br />
          <input type="text" name="description" placeholder="Descripción" required />
          <br />
          <input ref={input} type="file" name="avatar" required />
          <br />
          <button>publicar</button>
        </form>
      </div> */}

      <ListOfArticles articles={articles} />
    </main>
  )
}
