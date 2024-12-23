import React, { createContext, useState, useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../components/utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      console.log('auth provider use context')
     setLocalStorage()
     const {employees, admin} = getLocalStorage()
     setUserData({employees,admin})
    
    }, [])
    

    // const data = getLocalStorage()
    // console.log(data.employees)
    
  return (
    <div>
     <AuthContext.Provider value={userData}>
     {children}
     </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider





//notes

// getLocalStorage Function:

// const { employees, admin } = getLocalStorage();
// This line destructures the values returned by getLocalStorage.
// If getLocalStorage returns an object like this:
// {
//   employees: [/* some data */],
//   admin: { /* some admin data */ }
// }
// then employees and admin will hold the respective values.



// Setting State with setUserData:

// setUserData({ employees, admin });
// The { employees, admin } is shorthand for:
// {
//   employees: employees,
//   admin: admin
// }
// This creates an object with two properties: employees and admin.
