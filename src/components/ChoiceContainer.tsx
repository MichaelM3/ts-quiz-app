import { FC } from 'react'
import { IChoiceContainerProps } from '../interfaces'
import Choice from './Choice'

const ChoiceContainer: FC<IChoiceContainerProps> = ({ choices }) => {
    
    return (
        <div>
           {choices.map((choice:string, i:number) => <Choice key={i} choice={choice} />)} 
        </div>
    )
}

export default ChoiceContainer 
