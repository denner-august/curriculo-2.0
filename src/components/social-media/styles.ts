import styled from "styled-components";

export const Container = styled.div`
ul,li,a{
    background-color:var( --bg-cards);
}

li{
    display: flex ;
    flex-direction:column ;
    text-align:center ;
    list-style: none ;

    a{
    text-decoration:none ;
    font-size:1.5rem ;
        
    }

    a:hover{
        color:var(--bg-techs) ;
    }
}

ul{
 height:auto ;
 display: flex ;
flex-wrap: wrap ;
flex-direction:column ;
justify-content:center ;
 
 
}
`