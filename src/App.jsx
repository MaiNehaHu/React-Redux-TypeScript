import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './Components/SignupPage/SignupPage.tsx';
import LoginPage from './Components/LoginPage/LoginPage.tsx';
import DashBoard from './Components/DashBoard/DashBoard.tsx';
import { useSelector } from 'react-redux';

function App() {
  const newUser = useSelector((state) => {
    return state.newUserStatus.isNewUser;
  })
  const loggedUser = useSelector((state) => {
    return state.loggedUser;
  })

  return (
    <React.Fragment>
      <BrowserRouter basename='/demoApp'>
        <Routes>
          <Route path='/' element={
            newUser ? <SignupPage /> : <LoginPage />} />

          <Route path={`/UserDashBoard:${loggedUser.userName}`} element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
