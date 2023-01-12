import { FC, useState } from 'react'
import { IQuizContainerProps } from '../interfaces'
import Question from './Question'

const QuizContainer: FC<IQuizContainerProps> = ({ questionObjs }) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)

     

    // const displayChoices = questionObjs[currentQuestion].incorrectAnswers.map()


    return (
        <div>
            <Question question={questionObjs[currentQuestion].question} />         

        </div>
    )
}

export default QuizContainer
