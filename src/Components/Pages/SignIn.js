import React from 'react'
import Register from '../Register'
import Signin from '../Signin'

import { useState } from 'react'

export default function SignIn() {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div>
      
      <Signin changeAuthMode={changeAuthMode}></Signin>
     </div>
    )
  }

  return (
    <Register changeAuthMode={changeAuthMode}></Register>

  )
}
