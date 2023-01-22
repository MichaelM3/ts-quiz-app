import { useEffect, useState } from 'react'
import { IUser, isUser, IQuestionObject, } from './interfaces'
import Header from './components/Header'
import QuizContainer from './components/QuizContainer'
import ResultsContainer from './components/ResultsContainer'
import CategoryForm from './components/CategoryForm'

const App = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const [quizStarted, setQuizStarted] = useState<boolean>(false)
    const [questionObjects, setQuestionObjects] = useState<IQuestionObject[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    // localStorage.setItem("user", JSON.stringify(newUser))

    const fetchQuizData = async (category: string) => {
        try {
            const res = await fetch(`https://the-trivia-api.com/api/questions?limit=20&categories=${category}`)
            const data = await res.json()
            data.map((questionObj: IQuestionObject) => {
                questionObj.choices = [...questionObj.incorrectAnswers, questionObj.correctAnswer]
            })
            setQuestionObjects(data)
            setCurrentQuestionIndex(1)
            setQuizStarted(true)
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        const foundUser: unknown = localStorage.getItem("user")
        if (isUser(foundUser)) {
            setUser(JSON.parse(foundUser))
        }
    }, [])

    return (
        <main className='flex flex-col items-center w-full p-4 h-screen'>
            <Header user={user} />
            <hr className='w-full' />
            <CategoryForm fetchQuizData={fetchQuizData} />
            <div className='flex justify-evenly h-full  w-full'>
                <QuizContainer questionObject={questionObjects[currentQuestionIndex]} currentQuestionIndex={currentQuestionIndex} score={score} setScore={setScore} setCurrentQuestionIndex={setCurrentQuestionIndex} />
                <ResultsContainer score={score} currentQuestionIndex={currentQuestionIndex} />
            </div>
        </main>
    )
}

export default App
