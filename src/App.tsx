import { FC, useEffect, useState } from 'react'
import { IUser, isUser, IQuestionObj } from './interfaces'
import Nav from './components/Nav'

const App: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const [questions, setQuestions] = useState<IQuestionObj[]>([])
    // localStorage.setItem("user", JSON.stringify(newUser))

    const fetchQuizData = async () => {
        try {
            const res = await fetch("https://the-trivia-api.com/api/questions?limit=20")
            const data = await res.json()
            setQuestions(data)
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        const foundUser: unknown = localStorage.getItem("user")
        if (isUser(foundUser)) {
            setUser(JSON.parse(foundUser))
        }
        fetchQuizData()
    }, [])

    console.log(questions)

    return (
        <div className='flex flex-col items-center w-full p-4'>
            <Nav user={user} />
            <hr className='w-full' />
        </div>
    )
}

export default App
