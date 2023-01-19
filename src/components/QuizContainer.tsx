import { IQuizContainerProps } from '../interfaces/props'
import ChoiceContainer from './ChoiceContainer'
import Question from './Question'

const QuizContainer = ({ currentQuestionIndex, score, setScore, questionObject, setCurrentQuestionIndex }: IQuizContainerProps) => {

    const checkAnswer = (answer: string): void => {
        if (answer === questionObject.correctAnswer) {
            setScore(score + 1)
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    return (
        <div className='m-20 h-full w-2/3'>
            {questionObject ?
                <div className='flex flex-col items-center space-y-11'>
                    <Question question={questionObject.question} />
                    <ChoiceContainer checkAnswer={checkAnswer} choices={questionObject.choices} />
                </div>
                :
                null
            }
        </div>
    )
}

export default QuizContainer
