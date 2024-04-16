import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import './App.css'
import './assets/css/global.css'

import { lazy, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))
const Documentation = lazy(() => import('./pages/Documentation'))


// initializeApp()

const token = checkAuth()

function App() {
  useEffect(() => { themeChange(false) }, [])

  return (
    <>
      <BrowserRouter>
     {/* <SiteLayout> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documentation" element={<Documentation />} />
          
          {/* Place new routes over this ^^^ */}
          <Route path="/app/*" element={<Layout />} />

          <Route path="*" element={<Navigate to={token ? "/app/dashboard" : "/login"} replace />}/>

        </Routes>
        {/* </SiteLayout> */}
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}
export default App;
