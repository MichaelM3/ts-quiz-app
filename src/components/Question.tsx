import { IQuestionProps } from '../interfaces/props'

const Question = ({ question }: IQuestionProps) => {
    return (
        <div>
            <h2 className='text-6xl font-display'>{question}</h2>
        </div>
    )
}

export default Question
