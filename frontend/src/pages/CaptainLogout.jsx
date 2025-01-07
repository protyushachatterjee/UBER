import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {

    const token = localStorage.getItem('token');
    const navigate=useNavigate();


    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        localStorage.removeItem('token')
        navigate('/captain-login')
    }).catch((error) => {
        console.log(error)
    })

  return (
    <></>
  )
}

export default CaptainLogout