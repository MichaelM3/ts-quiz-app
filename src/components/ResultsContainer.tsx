import { FC } from 'react'
import { IResultsContainerProps } from '../interfaces'

const ResultsContainer: FC<IResultsContainerProps> = ({ score, currentQuestion }) => {
    return (
        <div className='border-l-2 p-4 w-1/3'>
            <h2 className='text-6xl font-bold'>Score: {score}/20</h2>
        </div>
    )
}

export default ResultsContainer
