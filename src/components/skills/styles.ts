import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    p{
        height: auto;
        font-size: 1.5rem;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        
        li{
            color: #F0E7E7;
            font-size: 1.1rem;
            background-color:var( --text-color);
            margin: 0.2rem;
            height: auto;
            width: 100px;
            border-radius: 0.5rem;
            text-align: center;
        }

        li:hover{
            background-color: var( --bg-techs);
            color: black;
            width: 110px;
            transition: 0.2s;
        }

        
    }  
    



`