import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    flex-direction: row ;
    justify-content: space-around ;
    align-items:center;

   
    .imagem{
        background-color:var( --bg-cards);
        
        img{
            border-radius: 0.5rem;
        }
    }

    p{  
        box-sizing: border-box ;
        font-size:1.5rem;
        text-align:  center;
        background-color:var( --bg-cards);

    }
`

export const Names = styled.div`
display: flex;
flex-direction: column;
/* background-color: red; */
background-color:var( --bg-cards);

p:hover{
    color: white;
    cursor: default;
}


`