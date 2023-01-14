import { FC } from 'react'
import { IQuestionProps } from '../interfaces'

const Question: FC<IQuestionProps> = ({ question }) => {
    return (
        <div>
           {question} 
        </div>
    )
}

export default Question
