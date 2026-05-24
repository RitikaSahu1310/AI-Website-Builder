import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import useGetCurrentUser from './hooks/useGetCurrentUser'
import Dashboard from './pages/Dashboard'
import Generate from './pages/Generate'
import WebsiteEditor from './pages/WebsiteEditor'
import LiveSite from './pages/LiveSite'
import Pricing from './pages/Pricing'
export const serverUrl = "https://ai-website-builder-scy8.onrender.com"

function App() {
  useGetCurrentUser()

  const { userData } = useSelector(state => state.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={userData ? <Dashboard /> : <Home/>} />
        <Route path='/generate' element={userData ? <Generate /> : <Home/>} />
        
        <Route path='/editor/:id' element={userData?<WebsiteEditor/>:<Home/>}/>
        <Route path='/site/:id' element={<LiveSite />} />
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
