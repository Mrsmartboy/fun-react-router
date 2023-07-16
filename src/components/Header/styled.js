import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  background: url('https://assets.ccbp.in/frontend/react-js/books-blog-bg.png');
  height: 25vh;
  justify-content: center;
  align-items: center;

`
export const Heading= styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  `

  export const ListContainer = styled.ul`
     display: flex;
     flex-direction: row;
     justify-content:center;
     align-items: center;
     padding-left: 0px;
  `
  export const Item = styled.li`
     list-style-type: none;
    color :#ffffff ;
    font-size: 15px;
    font-weight: bold;
    margin: 10px;
    cursor: pointer;
    text-decoration: none;
    border: none;
    outline: none;


  `
