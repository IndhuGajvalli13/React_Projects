import React, { createContext } from 'react'

export const userContext = createContext()  
  let UserProvider=({children})=>{
    return <userContext.Provider value={{name:"Indhu",phno:7767675544}}>
        {children}
    </userContext.Provider>

  }

export default UserProvider