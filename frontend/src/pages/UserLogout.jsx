import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {

    const token = localStorage.getItem('token');
    const navigate=useNavigate();


    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        localStorage.removeItem('token')
        navigate('/login')
    }).catch((error) => {
        console.log(error)
    })

  return (
    <></>
  )
}

export default UserLogout