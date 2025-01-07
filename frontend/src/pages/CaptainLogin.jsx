import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");

  };
  return (
    <div className="py-7 px-8 flex flex-col justify-between h-screen">
      <div>
        <div className="w-full flex justify-start items-end mb-10">
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
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-2xl mb-2 font-semibold">What's Your Email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded outline-none px-4 py-2 border w-full text-lg font-medium placeholder:text-base"
          />
          <h3 className="text-xl mb-2 font-semibold">Enter Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 outline-none border w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a Fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600 font-medium">
            Register as Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="flex items-center justify-center text-lg font-semibold w-full bg-[#f3c164] text-white py-3 rounded mb-5"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
