import { FC } from 'react'

import { IChoiceProps } from '../interfaces'

const Choice: FC<IChoiceProps> = ({ choice }) => {
    return (
        <div className='flex justify-around border-2 border-solid border-black w-full p-2 rounded-2xl hover:bg-white hover:cursor-pointer hover:animate-wiggle'>
            <span className='text-black text-4xl font-bold font-display'>
                {choice}
            </span>
        </div>
    )
}

export default Choice
