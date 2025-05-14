import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authUser'

const Navbar = () => {
  const { token, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  }

  return (
    <div className='flex h-16 bg-dark-blue justify-between items-center px-12 py-10'>
      <Link to={"/"}>
        <h1 className='inline-block font-bold text-4xl font-montserrat italic bg-gradient-to-r 
                     from-blue-400 to-pink-400 bg-clip-text text-transparent'
        >
          SNAPSHORT
        </h1>
      </Link>
      {token ? (
        <div className='flex gap-5 items-center'>
          <Link className='text-white text-xl hover:text-blue-500 font-semibold'
            to={"/dashboard"}>
              Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className='text-white text-sm bg-red-500 rounded-lg py-2 px-4 font-roboto font-semibold
                    hover:bg-red-600 cursor-pointer'
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          className='text-white text-sm bg-blue-500 rounded-lg py-2 px-4 font-roboto font-semibold
                    hover:bg-blue-600 cursor-pointer'
          to={"/login"}
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar
