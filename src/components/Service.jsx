import { FaLink } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const Service = () => {
  return (
    <div className='space-y-10 mt-12 md:space-y-12'>
      <div className='text-center max-w-5xl mx-auto space-y-4'>
        <h1 className='inline-block bg-custom-gradient font-semibold text-2xl sm:text-3xl md:text-4xl
                       bg-clip-text text-transparent'
        >
          Our SnapShort Services
        </h1>
        <p className='text-lg text-gray-400'>
          SnapShort is the all-in-one solution for transforming lengthy web addresses into 
          concise, shareable links—without any hassle. From a single dashboard, you can rapidly
          generate shortened URLs and maintain full control over every link you create. Detailed 
          analytics let you monitor click-through rates, date and time of the click in real time,
          so you always know exactly how your links are performing. Whether you’re running marketing 
          campaigns or simply sharing resources with colleagues, SnapShort makes link management 
          intuitive, efficient, and data-driven.
        </p>
      </div>
      <div className='flex justify-center'>
      <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <div className="flex items-start p-5 sm:p-6 lg:p-8 border rounded-3xl border-box-border
                         bg-box-bg shadow-lg shadow-box-shadow overflow-hidden"
          >
            <FaLink className="text-blue-500 text-5xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-400">
                Simple URL Shortening
              </h2>
              <p className="text-gray-400">
                Discover how simple it is to generate compact, unforgettable links in just a few clicks. 
                With our user-friendly design and rapid setup, you will be shortening URLs in no 
                time and completely hassle-free.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5 sm:p-6 lg:p-8 border rounded-3xl border-box-border
                         bg-box-bg shadow-lg shadow-box-shadow overflow-hidden"
          >
            <TbDeviceAnalytics className="text-yellow-600 text-5xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-400">
                Strong Analytics
              </h2>
              <p className="text-gray-400">
                Unlock a deeper understanding of how your links perform through our all-in-one 
                analytics hub. Monitor click counts, pinpoint audience locations, and trace 
                referral origins—so you can fine-tune your campaigns for maximum impact.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5 sm:p-6 lg:p-8 border rounded-3xl border-box-border
                         bg-box-bg shadow-lg shadow-box-shadow overflow-hidden"
          >
            <FaTruckFast className="text-fuchsia-600 text-5xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-400">
                Fast and Reliable
              </h2>
              <p className="text-gray-400">
                Benefit from ultra-fast redirects and industry-leading uptime powered by our 
                robust architecture. Your shortened links stay consistently live and lightning 
                responsive, delivering a flawless browsing experience every time.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5 sm:p-6 lg:p-8 border rounded-3xl border-box-border
                         bg-box-bg shadow-lg shadow-box-shadow overflow-hidden"
          >
            <MdOutlineSecurity className="text-red-600 text-4xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-400">
                Advanced Security
              </h2>
              <p className="text-gray-400">
                Feel confident knowing our stringent security protocols guard every shortened 
                link with cutting edge encryption, keeping your data safe at all times.
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Service
