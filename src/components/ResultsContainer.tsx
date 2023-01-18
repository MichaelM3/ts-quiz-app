import { IResultsContainerProps } from '../interfaces/props'

const ResultsContainer = ({ score, currentQuestion }: IResultsContainerProps) => {
  return (
    <div className='border-l-2 p-4 w-1/3'>
       <span>{score}</span>
    </div>
  )
}

export default ResultsContainer
