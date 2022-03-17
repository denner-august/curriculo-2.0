import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 4rem 0px 4rem;

h2{
    font-size: 2.2rem;
}

button{
    cursor: pointer;
    background-color: var( --bg-cards);
    font-size: 1.5rem;
    border: 1px;
    border-radius: 1rem;
    transition: 0.2s;

    a{
        text-decoration: none;    
    }

    a:hover{
        color:white;
    }

    a:active{
    color: var( --bg-techs);
    }
}

`

