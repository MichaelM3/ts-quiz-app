import { FC } from 'react'
import { INavProps } from '../interfaces'

const Nav: FC<INavProps> = ({ user }) => {
    return (
        <div className='flex justify-between w-full p-3'>
            <h1 className='text-xl font-bold'>Quiz App!</h1>
            { user ?
                <h2>Welcome {user.username}!</h2>
                :
                null
            }
        </div>
    )
}
export default Nav
