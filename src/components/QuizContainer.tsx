import { FC } from 'react'
import { IQuizContainerProps } from '../interfaces'
import ChoiceContainer from './ChoiceContainer'
import Question from './Question'

const QuizContainer: FC<IQuizContainerProps> = ({ questionObjects, score, setScore, currentQuestion, setCurrentQuestion }) => {

    const checkAnswer = (answer: string): void => {
        if (answer === questionObjects[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <div className='m-20 h-full w-2/3'>
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
