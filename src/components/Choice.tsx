import { FC } from 'react'
import { IChoiceProps } from '../interfaces'

const Choice: FC<IChoiceProps> = ({ choice }) => {
    return (
        <div>
            <input type="radio" value={choice} className="hover:cursor-pointer" />
            <label> {choice}</label>
        </div>
    )
}

export default Choice
