import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Main() {
    const user = useContext(UserContext)
    return (
        <>
            <header>
                <h1>Hi Your Name is: {user.name1}</h1>
                <h2>Your age is: {user.age1}</h2>
                <h2>& your email is: {user.email1}</h2>
            </header>
        </>
    )
}

export default Main

