import { createSlice, current } from "@reduxjs/toolkit";

let initialState = {
  users: [
    {
      id: 1,
      Name: "mayank",
      Password: "mayank12345",
      Email: "mayankkumar@gmail.com"
    }
  ],
  currentUser: null,
  isAuthenticated: false
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    login: (state, action) => {
      let { Name, Password, Email } = action.payload 

      console.log(action.payload);


      let user = state.users.find((user)=> user.Name === Name && user.Password === Password && user.Email === Email) 

      if(user){
        state.currentUser = Name
        state.isAuthenticated = true
      }
    },

    signup: (state, action) => {
      state.users.push({id: Date.now() , ...action.payload})
      state.currentUser = action.payload.Name
      state.isAuthenticated = true
    },

    logout: (state) => {
      state.currentUser = null,
      state.isAuthenticated = false
    }

  }
})

export const { login, signup, logout } = AuthSlice.actions
export const AuthReducer = AuthSlice.reducer