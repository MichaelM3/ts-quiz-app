import { FC } from 'react'
import { IChoiceContainerProps } from '../interfaces'

const MultipleChoice: FC<IChoiceContainerProps> = ({ choices }) => {
    return (
        <div className='flex flex-col'>
            <span>
                <input type="radio" id="choice1" name="choices" value={choices[0]} className="hover:cursor-pointer" />
                <label> {choices[0]}</label>
            </span>
            <span>
                <input type="radio" id="choice1" name="choices" value={choices[1]} />
                <label> {choices[1]}</label>
            </span>
            <span>
                <input type="radio" id="choice1" name="choices" value={choices[2]} />
                <label> {choices[2]}</label>
            </span>
            <span>
                <input type="radio" id="choice1" name="choices" value={choices[3]} />
                <label> {choices[3]}</label>
            </span>
        </div>
    )
}

export default MultipleChoice
