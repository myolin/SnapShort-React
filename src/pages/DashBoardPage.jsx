import { useState } from "react";
import Graph from "../components/dashboard/Graph"
import { useFetchTotalClicks, useFetchMyShortUrls } from "../hooks/useQuery";
import { useAuthStore } from "../store/authUser"
import ShortenPopup from "../components/dashboard/ShortenPopup";
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from "../components/dashboard/ShortenUrlList";
import { ClipLoader } from 'react-spinners';

const DashBoardPage = () => {
  const { token } = useAuthStore();
  const [shortenPopup, setShortenPopup] = useState(false);

  function onError() {
    console.log("ERROR");
  }

  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(token, onError);

  const { isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError);

  return (
    <div className='lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]'>
      {loader ? (
        <div className='flex justify-center items-center w-full h-[450px]'>
          <div className='flex flex-col items-center gap-1'>
            <ClipLoader size={70} />
          </div>
        </div>
      ) : (
        <div className='lg:w-[90%] w-full mx-auto py-16'>
          <div className='h-96 relative'>
            {totalClicks.length === 0 && (
              <div className='absolute flex flex-col justify-center sm:items-center items-end w-full left-0 top-0 bottom-0 right-0 m-auto'>
                <h1 className='text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1'>
                  No Data For This Time Period
                </h1>
                <h3 className='sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600'>
                  Share your short link to view where your engagements are
                  coming from
                </h3>
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>
          <div className='py-5 sm:text-end text-center'>
            <button
              className='bg-custom-gradient px-4 py-2 text-white rounded-md cursor-pointer'
              onClick={() => setShortenPopup(true)}
            >
              Create a new Short URL
            </button>
          </div>
          {!isLoading && myShortenUrls.length === 0 ? (
            <div className='flex justify-center pt-16'>
              <div className='flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-gray-500'>
                <h1 className='text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1'>
                  You haven't created any short link yet
                </h1>
                <FaLink className='text-blue-500 sm:text-xl text-sm' />
              </div>
            </div>
          ) : (
            <ShortenUrlList data={myShortenUrls} />
          )}
        </div>
      )}

      <ShortenPopup
        refetch={refetch}
        open={shortenPopup}
        setOpen={setShortenPopup}
      />
    </div>
  );
}

export default DashBoardPage
