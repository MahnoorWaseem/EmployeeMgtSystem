import React, { useContext, useEffect, useState } from 'react'
import { Login } from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './components/utils/LocalStorage'
import AuthProvider, { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null) //holds 'admin' or 'employee'
  const authData = useContext(AuthContext) // fetches value for employees and admins data
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  

  const handleLogin = (email,password) => {
     if(authData){
      const employee = authData.employees.find((e)=>e.email==email && e.password == password)
      const admin = authData.admin.find((e)=>e.email==email && e.password == password)

      if (employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      } else if (admin){
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      } 
      else{
        alert('Invalid Credentials')
      }
    }else{
alert('Failed to load data')
    }

  }

  
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} /> : (user == 'admin' ?  <AdminDashboard /> : <EmployeeDashboard data={loggedInUserData} />) } 
       
    </>
  )
}

export default App





 //   if(email == 'admin@me.com' && password =='123')
  //       {
  //         setUser('admin')
  //         localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
          
  //       }
  //       else if(authData){
  //         const employee = authData.employees.find((e)=>e.email==email && e.password == password)
  //         if (employee){
  //           setUser('employee')
  //           setLoggedInUserData(employee)
  //           localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
  //         } 
  //         else{
  //           alert('Invalid Credentials')
  //         }
  //       }
  //   // else{
  //   //   alert('Invalid Credentials')
  //   // }