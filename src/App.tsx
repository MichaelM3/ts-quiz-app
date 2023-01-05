import { FC, useEffect, useState } from 'react'
import './App.css'
import { IUser, isUser } from './interfaces'
import Nav from './components/Nav'

const App: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    // localStorage.setItem("user", JSON.stringify(newUser))

    useEffect(() => {
        const foundUser: unknown = localStorage.getItem("user")
        if (isUser(foundUser)) {
            setUser(JSON.parse(foundUser))
        }
    }, [])

    console.log(user?.username)

    return (
        <div className='App'>
            <Nav user={user} />
        </div>
    )
}

export default App
