import { FaFingerprint, FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const { login, isLoggingIn } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({username, password}, navigate);
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-wallpaper'>
      <div className='w-[90%] max-w-sm md:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 
                     rounded-xl shadow-slate-500 shadow-lg'
      >
        <h1 className='text-lg md:text-xl font-semibold'>
          WELCOME BACK
        </h1>
        <p className='text-xs md:text-sm text-gray-500 text-center'>
          Don't have an account?{" "}
          <Link to={"/signup"} className='text-white cursor-pointer'>
            Sign up
          </Link>
        </p>

        <form onSubmit={handleLogin} className='w-full flex flex-col gap-3'>
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
            className='w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm
                          md:text-base cursor-pointer'
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Loading..." : "Login"}
          </button>
        </form>

        <div className='relative w-full flex items-center justify-center py-3'>
          <div className='w-2/3 h-[2px] bg-gray-800'></div>
          <h3 className='text-xs md:text-sm px-4 text-gray-500'>Or</h3>
          <div className='w-2/3 h-[2px] bg-gray-800'></div>
        </div>

        <div className='flex items-center justify-center w-full p-2 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800'>
          <img src='/google-icon.png' alt='google-icon' className='w-6 md:w-8' />
          <p>Sign In With Google</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
