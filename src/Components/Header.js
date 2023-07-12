import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Header() {
const user = useContext(UserContext)

  return (
    <>
    <header>
      <h1>Welcome: {user.name2}!</h1>
      <h2>Age: {user.age2}</h2>
      <h2>Email: {user.email2}</h2>
    </header>
    </>
  )
}

export default Header
