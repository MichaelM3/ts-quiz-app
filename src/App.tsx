import { FC, useEffect, useState } from 'react'
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

    return (
        <div className='flex flex-col items-center w-full p-4'>
            <Nav user={user} />
            <hr className='w-full' />
        </div>
    )
}

export default App
