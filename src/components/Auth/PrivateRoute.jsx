
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoute = () => {
  let auth = useSelector((state)=>state.auth.isAuthenticated)
  let location = useLocation()

  console.log("auth", auth)

  useEffect(()=>{

  },[auth])

  return  auth ? (
    <Outlet />
  ) : 
  (
    <Navigate to="login" state={{from: location}} replace />
  )
  
}
