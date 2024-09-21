import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../app/AuthSlice'

export const Login = () => {
  let initialState = {
    Name: "",
    Password: "",
    Email: "",
  }
  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()


  const changeHandler = (e) => {
    const { name, value } = e.target
  
    setUser((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    dispatch(login(user))

    setUser(initialState)
  }

  
  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">Name:
        <input 
        type="text" 
        name="Name"
        value={user.Name}
        onChange={changeHandler} 
        />
        </label>
        <label htmlFor="">Password:
        <input 
        type="password" 
        name="Password"
        value={user.Password}
        onChange={changeHandler} 
        />
        </label>
        <label htmlFor="">Email:
        <input 
        type="email" 
        name="Email"
        value={user.Email}
        onChange={changeHandler} 
        />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={()=>setUser({Name: "mayank", Password: "mayank12345", Email: "mayankkumar@gmail.com"})}>Guest Login</button>
      </form>
    </div>
  )
}
