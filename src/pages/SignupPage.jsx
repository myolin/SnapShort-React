import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const { signup, isSigningUp } = useAuthStore();

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({ email, username, password }, navigate);
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-wallpaper'>
      <div className='w-[90%] max-w-sm md:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 
                     rounded-xl shadow-slate-500 shadow-lg'
      >
        <h1 className='text-lg md:text-xl font-semibold'>
          REGISTER TO GET STARTED
        </h1>
        <p className='text-xs md:text-sm text-gray-500 text-center'>
          Already have an account?{" "}
          <Link to={"/login"} className='text-white cursor-pointer'>
            Login
          </Link>
        </p>

        <form onSubmit={handleSignUp} className='w-full flex flex-col gap-3'>
          <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2'>
            <FaRegUser />
            <input
              type='text'
              placeholder='Username'
              className='bg-transparent border-0 w-full outline-none text-sm md:text-base'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2'>
            <MdAlternateEmail />
            <input
              type='email'
              placeholder='Email'
              className='bg-transparent border-0 w-full outline-none text-sm md:text-base'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative'>
            <FaFingerprint />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='bg-transparent border-0 w-full outline-none text-sm md:text-base'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash className='absolute right-5 cursor-pointer' onClick={togglePasswordVisibility} />
            ) : (
              <FaRegEye className='absolute right-5 cursor-pointer' onClick={togglePasswordVisibility} />
            )}
          </div>

          <button
            type='submit'
            className='w-full p-2 bg-red-500 rounded-xl mt-3 hover:bg-red-600 text-sm
                          md:text-base cursor-pointer'
            disabled={isSigningUp}
          >
            {isSigningUp ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage
