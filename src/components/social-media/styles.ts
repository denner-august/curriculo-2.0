import styled from "styled-components";

export const Container = styled.div`
ul,li,a,p{
    background-color:var( --bg-cards);
}

li{
    display: flex ;
    flex-direction:column ;
    text-align:center ;
    list-style: none ;
    margin: 1rem;

    a{
    text-decoration:none ;
    font-size:1.5rem ;
    
    p{
        font-size:1rem ;
        
    }
}

    a:hover{
        color:var(--bg-techs) ;
    }
}

ul{
height:auto ;
display: flex ;
flex-wrap: wrap ;
flex-direction:row ;
justify-content:center ;
}
`