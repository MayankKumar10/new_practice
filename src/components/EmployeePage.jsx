import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addEmployee, editEmployee, employeeState, employeeUpdate, removeEmployee} from "../App/EmployeeSlice"

export const EmployeePage = () => {
  const {data, employeeForm } = useSelector((state)=>state.employee)

  const [users, setUsers] = useState(employeeForm)

  const dispatch = useDispatch()
  
  console.log({data, employeeForm})

  const onChangeHandler = (e) => {
    let { name, value } = e.target

    setUsers((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  useEffect(()=>{
    setUsers(employeeForm)
  },[employeeForm])

  const onSubmitHandler = (e) => {
    e.preventDefault()

    users.id ? dispatch(employeeUpdate(users)) : dispatch(addEmployee({ ...users, id: Date.now()}))

    setUsers(employeeState)
  }

  return (
    <div>
      <h4>Employee Page</h4>

      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">Add Employee: 
        <input 
        type="text" 
        name="FirstName" 
        value={users.FirstName}
        onChange={onChangeHandler}
        />
        <input 
        type="text" 
        name="LastName" 
        value={users.LastName}
        onChange={onChangeHandler}
        />
        <input 
        type="text" 
        name="Email" 
        value={users.Email}
        onChange={onChangeHandler}
        />
        </label>

        <button type="submit">Submit</button>
      </form>

      {data.length > 0 && data.map((data)=>(<div key={data.id}>
        <p>{data.FirstName} &nbsp; {data.LastName} &nbsp; {data.Email}</p>
        <button onClick={()=>dispatch(editEmployee({id: data.id}))}>Edit</button> &nbsp; 
        <button onClick={()=>dispatch(removeEmployee({id: data.id}))}>Remove</button>        
      </div> ))}

    </div>
  )
}
