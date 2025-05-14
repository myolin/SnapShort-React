import { FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { MdAnalytics, MdOutlineAdsClick } from 'react-icons/md';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { useAuthStore } from '../../store/authUser';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Graph from './Graph';

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useAuthStore();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [analyticsData, setAnalyticsData] = useState([]);

  const navigate = useNavigate();
  const subDomain = import.meta.env.VITE_REACT_SUBDOMAIN.replace(/^https?:\/\//, "");

  const handleCopyToClipboard = async () => {
    try {
      const shortUrlLinkToCopy = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`;
      await navigator.clipboard.writeText(shortUrlLinkToCopy);
      setIsCopied(true);
      toast.success("Copied!");
    } catch (error) {
      console.log(error);
      toast.error("Copy failed");
    }
  }

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }
    setAnalyticToggle(!analyticToggle);
  }

  const fetchMyShortUrl = async () => {
    setLoader(true);
    try {
      const { data } = await api.get(`/api/urls/analytics/${selectedUrl}?startDate=2024-12-01T00:00:00&endDate=2025-12-31T23:59:59`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setAnalyticsData(data);
      setSelectedUrl("");
    } catch (error) {
      navigate("/error");
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();  
    }
  }, [selectedUrl]);

  return (
    <div className={`bg-slate-100 shadow-lg border border-dotted  border-slate-500 px-6 sm:py-1 py-3 rounded-md  transition-all duration-100 `}>
      <div className={`flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5 `}>
        <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
          <div className="text-slate-900 pb-1 sm:pb-0   flex items-center gap-2 ">
            <a
              href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
              target='_blank'
              className='text-[17px] font-montserrat font-[600] link-color'
            >
              {subDomain + "/" + `${shortUrl}`}
            </a>
            <FaExternalLinkAlt className='link-color' />
          </div>

          <div className='flex items-center gap-1'>
            <h3 className='text-slate-700 font-[400] text-[17px]'>
              {originalUrl}
            </h3>
          </div>

          <div className='flex items-center gap-8 pt-6'>
            <div className='flex gap-1 items-center font-semibold text-green-800'>
              <span>
                <MdOutlineAdsClick className='text-[22px] me-1' />
              </span>
              <span className='text-[16px]'>
                {clickCount}
              </span>
              <span className='text-[16px]'>
                {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>

            <div className='flex items-center gap-2 font-semibold text-lg text-slate-800'>
              <span>
                <FaRegCalendarAlt />
              </span>
              <span className='text-[17px]'>
                {dayjs(createdDate).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-1 sm:justify-end items-center gap-4'>
          <button
            onClick={handleCopyToClipboard}
            className='px-3 py-2 bg-blue-500 text-white rounded cursor-pointer'
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>

          <div
            onClick={() => analyticsHandler(shortUrl)}
            className='flex gap-1 items-center bg-rose-700 py-2 font-semibold shadow-md shadow-slate-500
                       px-6 rounded-md text-white cursor-pointer'
          >
            <button className='cursor-pointer'>Analytics</button>
            <MdAnalytics className='text-md' />
          </div>
        </div>
      </div>

      <>
        <div
          className={`${analyticToggle ? 'flex' : 'hidden'
            } max-h-96 sm:mt-0 mt-5 min-h-96 relative border-t-1 w-[100%] overflow-hidden`}
        >
          {loader ? (
            <div className='min-h-[calc(450px-140px)] flex justify-center items-center w-full'>
              <div className='flex flex-col items-center gap-1'>
                <ClipLoader size={50} className='bg-custom-gradient'/>
                <p className='text-slate-700'>Please wait...</p>
                </div>
            </div>
          ) : (
            <>
              {analyticsData.length === 0 && (
                <div className='absolute flex flex-col justify-center sm:items-center items-end w-full
                                left-0 top-0 bottom-0 right-0 m-auto'
                >
                  <h1 className='text-slate-800 font-serif sm:text-2xl text-[15px] font-bold mb-1'>
                    No Data For This Time Period
                  </h1>
                  <h3 className='sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-[12px] text-slate-600'>
                    Track where your clicks are coming from by sharing your short link.
                  </h3>
                </div>
              )}
              <Graph graphData={analyticsData} />
            </>
          )}
        </div>
      </>
    </div>
  );
}

export default ShortenItem
