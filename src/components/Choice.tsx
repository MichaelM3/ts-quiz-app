import { FC, MouseEvent } from 'react'

import { IChoiceProps } from '../interfaces'

const Choice: FC<IChoiceProps> = ({ choice, checkAnswer }) => {

    const handleClick = (e: MouseEvent<HTMLSpanElement>): void => {
        const target = e.target as HTMLSpanElement
        checkAnswer(target.innerText)
    }

    return (
        <div
            className='flex justify-around bg-black w-full p-2 rounded-2xl hover:bg-blue-400 hover:cursor-pointer hover:animate-wiggle'
            onClick={handleClick}
        >
            <span className='text-white text-4xl font-bold font-display'>
                {choice}
            </span>
        </div>
    )
}

export default Choice
