import { FC } from 'react'
import { INavProps } from '../interfaces'
import { Menu, Container } from 'semantic-ui-react'

const Nav: FC<INavProps> = ({ user }) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='h1' style={{ marginRight: '5rem' }} header>Quiz App</Menu.Item>
                {user ?
                    <Menu.Item as='h2' style={{ right: 0, position: 'fixed' }} header>
                        Welcome {user.username}!
                    </Menu.Item>
                    :
                    null
                }
            </Container>
        </Menu>
    )
}
export default Nav
