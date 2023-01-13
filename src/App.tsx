import { FC, useEffect, useState } from 'react'
import { IUser, isUser, IQuestionObj, IOption } from './interfaces'
import Nav from './components/Nav'
import QuizContainer from './components/QuizContainer'

const App: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const [questions, setQuestions] = useState<IQuestionObj[]>([])
    const [category, setCategory] = useState<string>("general_knowledge")
    // localStorage.setItem("user", JSON.stringify(newUser))

    const options: IOption[] = [
        { name: "Arts & Literature", value: "arts_and_literature" },
        { name: "Film & TV", value: "film_and_tv" },
        { name: "Food & Drink", value: "food_and_drink" },
        { name: "General Knowledge", value: "general_knowledge" },
        { name: "Geography", value: "geography" },
        { name: "History", value: "history" },
        { name: "Music", value: "music" },
        { name: "Science", value: "science" },
        { name: "Society & Culture", value: "society_and_culture" },
        { name: "Sports & Leisure", value: "sports_and_leisure" },
    ]

    const fetchQuizData = async (): <Promise>void => {
        try {
            const res = await fetch(`https://the-trivia-api.com/api/questions?limit=20&categories=${category}`)
            const data = await res.json()
            const shuffledData = data.map((questionObj: IQuestionObj) => {
                questionObj.choices: [...questionObj.incorrectAnswers, questionObj.correctAnswer] 
            })
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
    }, [])

    console.log(questions)

    return (
        <div className='flex flex-col items-center w-full p-4'>
            <Nav user={user} />
            <hr className='w-full' />
            <div className='flex m-4'>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {options.map((option) => (
                        <option value={option.value}>{option.name}</option>
                    ))}
                </select>
                <button onClick={fetchQuizData} className="bg-white text-slate-500 p-2 rounded-r-lg">
                    Submit
                </button>
            </div>
            <QuizContainer questionObjs={questions} />
        </div>
    )
}

export default App
