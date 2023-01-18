import { IResultsContainerProps } from '../interfaces/props'

<<<<<<< HEAD
const ResultsContainer = ({ score, currentQuestion }: IResultsContainerProps) => {
  return (
    <div className='border-l-2 p-4 w-1/3'>
       <span>{score}</span>
    </div>
  )
=======
const ResultsContainer: FC<IResultsContainerProps> = ({ score, currentQuestion }) => {
    return (
        <div className='border-l-2 p-4 w-1/3'>
            <h2 className='text-6xl font-bold'>Score: {score}/20</h2>
        </div>
    )
>>>>>>> e77c8081b0c475e2653116253b0d64943bf2fcf8
}

export default ResultsContainer
