import { FC, useState } from 'react'
import { IQuizContainerProps } from '../interfaces'
import ChoiceContainer from './ChoiceContainer'
import Question from './Question'

const QuizContainer: FC<IQuizContainerProps> = ({ questionObjects }) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState<number>(0)

    const checkAnswer = (answer: string): void => {
        if (answer === questionObjects[currentQuestion].correctAnswer) {
            console.log("correct!")
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <div className='m-20 h-full'>
            {questionObjects.length > 0 ?
                <div className='flex flex-col items-center space-y-11'>
                    <Question question={questionObjects[currentQuestion].question} />
                    <ChoiceContainer checkAnswer={checkAnswer} choices={questionObjects[currentQuestion].choices} />
                </div>
                :
                null
            }
        </div>
    )
}

export default QuizContainer
