import { Link } from 'react-router-dom'

const NotFouond404Page = () => {

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-wallpaper p-6'>
      <h1 className='text-5xl font-bold mt-4 mb-4 text-white'>
        Lost your way?
      </h1>
      <p className='mb-6 text-xl text-center'>
        Oops! Something went wrong! <br />
        Sorry, we can't find that page. <br />
        You'll find lots to explore on the home page.
      </p>
      <Link to={"/"} className='px-4 py-2 rounded text-white bg-indigo-500 hover:bg-indigo-700'>
        SnapShort Home
      </Link>
    </div>
  );
}

export default NotFouond404Page
