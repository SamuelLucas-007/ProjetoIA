import styled from 'styled-components'

export const Container = styled.div`
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    height: 10rem;
`

export const LogoContainer = styled.div`
    margin-right: auto;
`

export const NavItem = styled.div`
    font-size: 1.8rem;
    padding: 1.8rem 2rem;
    transition: all .4s;
    border-radius: 1rem;
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.black};
    }
    &:hover {
        background-color: white;
    }
`