import React, { useState } from "react";;
import { Link } from "react-router-dom";

const UserSignup = () => {

const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [firstName, setfirstName] = useState('')
const [lastName, setlastName] = useState('')
const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName:{
        firstName: firstName,
        lastName: lastName
      }
    })

    setemail('')
    setpassword('')
    setfirstName('')
    setlastName('')
  }
  return (
    <div className="py-7 px-8 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-7"
          src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-xl mb-2 font-semibold">What's Your Name</h3>
          <div className="flex gap-4 mb-3">
            <input
            required
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="First Name"
              className="bg-[#eeeeee] mb-4 rounded outline-none px-4 py-2 border w-1/2 text-lg font-medium placeholder:text-base"
            />
            <input
            required
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Last Name"
              className="bg-[#eeeeee] mb-4 rounded outline-none px-4 py-2 border w-1/2 text-lg font-medium placeholder:text-base"
            />
          </div>
          <h3 className="text-xl mb-2 font-semibold">What's Your Email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-5 rounded outline-none px-4 py-2 border w-full text-lg font-medium placeholder:text-base"
          />
          <h3 className="text-xl mb-2 font-semibold">Enter Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="******"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 outline-none border w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          Already Have Account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[9px] leading-tight">By proceeding, you can consent to get calls, Whatsapp or SMS, including by automated means, from Uber and it's affiliates to the number provided.</p>
      </div>
    </div>
  );
};

export default UserSignup;
