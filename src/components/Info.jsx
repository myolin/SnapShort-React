import { MdOutlineAccessTime, MdOutlineSecurity, MdOutlineThumbUpAlt } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";

const Info = () => {
  return (
    <div className='relative mt-16 md:mt-16'>
      <div className='flex justify-center align-center'>
        <div className='mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl
                        bg-box-bg border border-box-border shadow-lg shadow-box-shadow 
                        md:divide-x divide-box-border divide-red-50 grid grid-cols-2 md:grid-cols-4'
        >
          <div className='text-center px-5'>
            <MdOutlineAccessTime className='inline-flex text-5xl text-cyan-300 mb-4'/>
            <h2 className='font-semibold text-sm sm:text-md md:text-lg text-white/90'>
              Instant Shortening
            </h2>
            <p className='mt-2 text-white/90'>
              Create short links in seconds
            </p>
          </div>

          <div className='text-center px-5'>
            <MdOutlineSecurity className='inline-flex text-5xl text-cyan-300 mb-4'/>
            <h2 className='font-semibold text-sm sm:text-md md:text-lg text-white/90'>
              Secure
            </h2>
            <p className='mt-2 text-white/90'>
              Your links are safe
            </p>
          </div>

          <div className='text-center px-5'>
            <TbDeviceAnalytics className='inline-flex text-5xl text-cyan-300 mb-4'/>
            <h2 className='font-semibold text-sm sm:text-md md:text-lg text-white/90'>
              Detailed Analytics
            </h2>
            <p className='mt-2 text-white/90'>
              Get insights on your link performance
            </p>
          </div>

           <div className='text-center px-5'>
            <MdOutlineThumbUpAlt className='inline-flex text-5xl text-cyan-300 mb-4'/>
            <h2 className='font-semibold text-sm sm:text-md md:text-lg text-white/90'>
              Reliable
            </h2>
            <p className='mt-2 text-white/90'>
              Your links are always accessible
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Info
