import React, { useEffect } from 'react'
import { useState } from 'react'

const Auth = () => {

  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))
  const [isUser , setisUser] =useState()
  const [isAdmin, setisAdmin] = useState()
  
  useEffect(_ => {
    if (localStorage.getItem("user") != null) {
      if (user.role === "user") {
        setisUser(true)
        setisAdmin(false)
      }
      else{
        setisUser(false)
        setisAdmin(true)
      }
      
    } else {
      setisUser(false)
      setisAdmin(false)
    }
  } ,[])

  return [user , isUser , isAdmin]
}

export default Auth