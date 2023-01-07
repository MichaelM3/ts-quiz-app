import { FC, useEffect, useState } from 'react'
import './App.css'
import { IUser, isUser } from './interfaces'
import Nav from './components/Nav'
import { Grid, Divider } from 'semantic-ui-react'

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
        <div className='App'>
            <Grid divided="vertically">
                <Nav user={user} />
                <Divider />
            </Grid>
        </div>
    )
}

export default App
