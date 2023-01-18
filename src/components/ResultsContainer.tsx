import { IResultsContainerProps } from '../interfaces/props'

const ResultsContainer = ({ score, currentQuestion }: IResultsContainerProps) => {
    return (
        <div className='border-l-2 p-4 w-1/3 space-y-4'>
            <h2 className='text-6xl font-bold text-center'>Score: {score}</h2>
            <hr />
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold'>Questions Remaining</h2>
                <span className='text-2xl font-bold'>{20 - (currentQuestion+1)}</span>
            </div>
        </div>
    )
}

export default ResultsContainer
