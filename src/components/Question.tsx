import { FC } from 'react'
import { IQuestionProps } from '../interfaces'

const Question: FC<IQuestionProps> = ({ question }) => {
    return (
        <div>
            <h2 className='text-6xl font-display'>{question}</h2>
        </div>
    )
}

export default Question
