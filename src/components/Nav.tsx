import { INavProps } from '../interfaces/props'

const Nav = ({ user }: INavProps) => {
    return (
        <div className='flex justify-between w-full p-3'>
            <h1 className='text-xl font-bold'>Quiz App!</h1>
            { user ?
                <h2>Welcome {user.username}!</h2>
                :
                <span>
                    <a href="">Login</a>
                    <a href="">Register</a>
                </span> 
            }
        </div>
    )
}
export default Nav
