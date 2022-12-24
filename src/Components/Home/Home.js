import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authProvider } from '../../Contexts/UserContext'

const Home = () => {
    const navigate = useNavigate()
    const {userLogout} = useContext(authProvider)
    const handleLogout = ()=>{
        userLogout()
        .then(()=>{
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <h1 className='text-4xl font-semibold'>Welcome</h1>
        <button onClick={handleLogout} className='btn btn-outline mt-5'>Logout</button>
    </div>
  )
}

export default Home