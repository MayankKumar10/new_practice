import { createSlice } from "@reduxjs/toolkit";

export let employeeState = {
  id: "",
  FirstName: "",
  LastName: "",
  Email: ""
}

let initialState = {
  data: [
    {
      id: 1,
      FirstName: "Mayank",
      LastName: "Kumar",
      Email: "mayankkumar@gmail.com"
    }
  ],
  employeeForm: employeeState,
  status: "idle",
  error: null
}

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
     state.data.push(action.payload) 
    },
    
    editEmployee: (state, action) => {
      let { id } = action.payload

      let employeeId = state.data.find((employee)=> employee.id === id)

      if(employeeId){
        state.employeeForm = {...employeeId}
      }

    },

    employeeUpdate: (state, action) => {
      let { id } = action.payload

      let index = state.data.findIndex((employee)=> employee.id === id)

      if(index){
        state.data[index] = action.payload  
      }
    },

    removeEmployee: (state, action) => {

      state.data = state.data.filter((employee)=> employee.id !== action.payload.id)

    }

  }
})

export const { addEmployee, editEmployee, employeeUpdate, removeEmployee } = EmployeeSlice.actions

export const EmployeeReducer = EmployeeSlice.reducer