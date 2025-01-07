import React, { useState } from 'react'


export const userDataContext = React.createContext();

const UserContext = ({children}) => {

  const [user, setUser] = useState({
    fullName:{
      firstName: '',
      lastName: ''
    },
    email: '',
  })
  return (
    <userDataContext.Provider value={{user, setUser}}>{children}</userDataContext.Provider>
  )
}

export default UserContext
