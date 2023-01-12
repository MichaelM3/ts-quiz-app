import { FC } from 'react'

const Question: FC<IQuestionProps> = ({ question }) => {
    return (
        <div>
           {question} 
        </div>
    )
}

export default Question
