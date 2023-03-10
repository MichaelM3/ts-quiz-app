import { IChoiceContainerProps } from '../interfaces/props'
import Choice from './Choice'

const ChoiceContainer = ({ choices, checkAnswer }: IChoiceContainerProps) => {
    
    return (
        <div className='flex flex-col items-start space-y-11 bg-slate-400 rounded-3xl p-10 w-1/2'>
           {choices.map((choice:string, i:number) => <Choice key={i} choice={choice} checkAnswer={checkAnswer} />)} 
        </div>
    )
}

export default ChoiceContainer 
