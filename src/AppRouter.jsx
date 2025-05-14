import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Toaster } from 'react-hot-toast'
import DashBoardPage from './pages/DashBoardPage'
import ShortenUrlPage from "./pages/ShortenUrlPage";
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NotFouond404Page from './pages/NotFound404Page'

const AppRouter = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route 
          path='/login' 
          element={
            <PrivateRoute publicPage={true}>
              <LoginPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/signup' 
          element={
            <PrivateRoute publicPage={true}>
              <SignupPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path='/dashboard' 
          element={
            <PrivateRoute publicPage={false}>
              <DashBoardPage />
            </PrivateRoute>
          } 
        />
        <Route path='*' element={<NotFouond404Page />} />
      </Routes>
    </>
  );
}

export default AppRouter

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path='/:url' element={<ShortenUrlPage />} />
    </Routes>
  );
}
