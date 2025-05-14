import { BrowserRouter } from 'react-router-dom'
import { getApps } from './utils/helper'
import { useEffect } from 'react';
import { useAuthStore } from './store/authUser';

function App() {
  const {setToken, finishCheckingAuth} = useAuthStore();

  useEffect(() => {
    const tokenFromStorage = JSON.parse(localStorage.getItem("SNAPSHORT_JWT_TOKEN"));
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
    finishCheckingAuth();
  }, [setToken, finishCheckingAuth]);

  const CurrentApp = getApps();

  return (
    <BrowserRouter>
      <CurrentApp />
    </BrowserRouter>
  );
}

export default App