import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
ul{
    display: flex;
    flex-direction: column;
    margin-left: 2rem;

    li{
        list-style: disc;
        font-size: 1.2rem;

    }
    li:hover{
        color: white;
        transition: 0.2s;
        cursor: pointer;
    }
}
p{
    font-size: 1.5rem;
}
`