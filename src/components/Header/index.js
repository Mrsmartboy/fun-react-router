import {Link} from 'react-router-dom'

import {NavContainer,Heading,ListContainer,Item} from './styled'
const Header= ()=>{
   

    return(
        <NavContainer>
            <Heading>My Blog</Heading>
            <ListContainer>
            <Link to="/">
                <Item>
                   Home
                    </Item>
                    </Link>
                    <Link to="/about">
                <Item>About</Item></Link>
                <Link to="/contact">
                <Item>Contact</Item></Link>
            </ListContainer>
        </NavContainer>
    )

}


export default Header