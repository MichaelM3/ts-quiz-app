import { IHeaderProps } from '../interfaces/props'

const Header = ({ user }: IHeaderProps) => {
    return (
        <header className='flex justify-between w-full p-3'>
            <h1 className='text-xl font-bold'>Quiz App!</h1>
            { user ?
                <h2>Welcome {user.username}!</h2>
                :
                <span>
                    <a href="">Login</a>
                    <a href="">Register</a>
                </span> 
            }
        </header>
    )
}
export default Header
