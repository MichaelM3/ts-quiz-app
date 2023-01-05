import { FC } from 'react'
import { INavProps } from '../interfaces'

const Nav: FC<INavProps> = ({ user }) => {
    return (
        <div>
            Inside nav component
            { user ?
                <h2>{user.username}</h2>
                :
                null
            }
        </div>
    )
}
export default Nav
