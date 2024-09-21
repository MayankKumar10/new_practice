import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { PrivateRoute } from './PrivateRoute'
import { Dashboard } from './Dashboard'

export const AuthPage = () => {
  return (
    <div>
      <h4>AuthPage</h4>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}
