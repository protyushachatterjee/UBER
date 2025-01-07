import React, { useContext, useState } from "react";;
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axiso from 'axios'
import { useNavigate } from "react-router-dom";

const SignUpCaptain = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate=useNavigate();

    const submitHandler = async (e) => {
      e.preventDefault();
      const CaptainData={
        email: email,
        password: password,
        fullname:{
          firstname: firstName,
          lastname: lastName
        },
        vehicle:{
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response= await axiso.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, CaptainData)
      if(response.status===201){
        const data=response.data
        setCaptain(data)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }

      setemail('')
      setpassword('')
      setfirstName('')
      setlastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }
  return (
    <div className="py-7 px-8 flex flex-col justify-between h-screen">
    <div>
    <div className="w-full flex justify-start items-end mb-5">
          <img
            className="w-20"
            src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
            alt=""
          />
          <img
            className="w-7 ml-1"
            src="https://imgs.search.brave.com/GdHwOqtWpOsrMrn40RRsmQNX9rl3YRvMALto5Xz51ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY2FyLTEtMS81/MC82My02NC5wbmc"
            alt=""
          />
        </div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <h3 className="text-lg mb-2 font-semibold">What's Your Name</h3>
        <div className="flex gap-4">
          <input
          required
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="First Name"
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 py-1 border w-1/2 text-lg font-medium placeholder:text-base"
          />
          <input
          required
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="Last Name"
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 py-1 border w-1/2 text-lg font-medium placeholder:text-base"
          />
        </div>
        <h3 className="text-lg mb-2 font-semibold">What's Your Email</h3>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email@example.com"
          className="bg-[#eeeeee] mb-3 rounded outline-none px-4 py-1 border w-full text-lg font-medium placeholder:text-base"
        />
        <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="******"
          className="bg-[#eeeeee] mb-3 rounded px-4 py-1 outline-none border w-full text-lg placeholder:text-base"
        />
        <h3 className="text-lg mb-2 font-semibold">Vehicle Information</h3>
        <div className="flex gap-2">
          <input
          required
            type="text"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            placeholder="Vehicle Color"
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 border w-1/2 py-2 text-sm font-medium placeholder:text-base"
          />
          <input
          required
            type="text"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            placeholder="Vehicle Plate"
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 border w-1/2 py-2 text-sm font-medium placeholder:text-base"
          />
          
        </div>
        <div className="flex gap-2">
        <input
          required
            type="text"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            placeholder="Vehicle Capacity"
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 border w-1/2 py-2 text-sm font-medium placeholder:text-base"
          />
          <select
            required
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 border w-1/2 py-2 text-sm font-medium placeholder:text-base"
          >
            <option value="" disabled>Select Vehicle</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            
          </select>
          
        </div>

        <button className="bg-[#5b2c2c] text-white mt-4 mb-3 rounded px-4 py-2 border w-full text-lg font-semibold">
          Create Captain Account
        </button>
      </form>
      <p className="text-center">
        Already Have Account?{" "}
        <Link to="/captain-login" className="text-blue-600 font-medium">
          Login
        </Link>
      </p>
    </div>
   <div className="w-full flex justify-center"><p className="text-[8px]">all rights are reserved @Uber</p></div>
  </div>
  )
}

export default SignUpCaptain