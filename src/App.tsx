import { FC, useEffect, useState } from 'react'
import './App.css'
import { IUser, isUser, newUser } from './interfaces'

const App: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    // localStorage.setItem("user", JSON.stringify(newUser))

    useEffect(() => {
        const foundUser: unknown = localStorage.getItem("user")
        if (isUser(foundUser)) {
            setUser(foundUser)
        }
    }, [])

    console.log(user)

    return (
        <div className='App'>
        </div>
    )
}

export default App
