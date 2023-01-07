import { FC } from 'react'
import { INavProps } from '../interfaces'

const Nav: FC<INavProps> = ({ user }) => {
    return (
        <div>
            { user ?
                <h2>Welcome {user.username}!</h2>
                :
                null
            }
        </div>
    )
}
export default Nav
