import { FC } from 'react'
import { IResultsContainerProps } from '../interfaces'

const ResultsContainer: FC<IResultsContainerProps> = ({ score, currentQuestion }) => {
  return (
    <div className='border-l-2 p-4 w-1/3'>
       <span>{score}</span>
    </div>
  )
}

export default ResultsContainer
