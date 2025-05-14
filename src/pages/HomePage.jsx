import { FaStaylinked } from "react-icons/fa"
import Info from "../components/Info"
import Service from "../components/Service"

const HomePage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-dark-blue px-28'>
      <div className='text-center max-w-5xl'>
        <h1 className='inline-block text-5xl mt-8 mb-4 font-bold font-roboto bg-gradient-to-r 
                     from-blue-400 to-pink-400 bg-clip-text text-transparent'>
          SnapShort Simplifies URL Shortening for Seamless Sharing
        </h1>
        <p className='text-gray-400 text-md'>
          SnapShort makes creating crisp, memorable URLs a breeze with its user-friendly
          dashboard. Effortlessly share your links across all platforms and streamline
          your sharing workflow. Leverage SnapShort robust analytics to track clicks,
          organize your URLs, and amplify your online impact.
        </p>
      </div>
      <div className='mt-16 w-lvh flex max-w-md mx-auto lg:mx-0'>
        <div className='flex sm:flex-ro  w gap-5 w-full'>
          <form 
            action='#' 
            className='py-1 pl-6 w-full pr-1 flex gap-3 items-center shadow-lg border 
                       border-white/90 rounded-full ease-linear'>
            <FaStaylinked className='min-w-max pr-2 text-white/90 text-3xl border-r' />
            <input 
              type='text' 
              placeholder='Enter Your URL'
              className='w-full py-3 placeholder-gray-400 outline-none bg-transparent
                         text-white'
            />
            <button className='px-6 py-3 rounded-full outline-none cursor-pointer relative
                              overflow-hidden min-w-max text-white bg-custom-gradient' 
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
      <Info />
      <Service />
    </div>
  );
}

export default HomePage
