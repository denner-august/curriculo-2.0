import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --body-bg-color: #22212C;
  --text-color: #837E9F;
  --bg-cards: #302F3D;
  --bg-techs: #CB92B1;
  --bord-card:10px
}

*{
  
    margin: 0;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color:  var(--body-bg-color);

}

h1,h2,p,ul,li,a{
    color:var(--text-color);
    background-color:var( --bg-cards);
    
}
 li{
   list-style: none;
 }

.container{
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 0.3fr 1fr 0.5fr;
  grid-auto-columns: 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
}

.social { 
grid-area: 2 / 1 / 3 / 2; 
background-color:var( --bg-cards);
border-radius:var(--bord-card)   
}

.social-media {   
grid-area: 2 / 1 / 3 / 2;
background-color:var( --bg-cards);
border-radius:var(--bord-card)  }

.profile { grid-area: 1 / 1 / 2 / 2;
background-color:var( --bg-cards);
border-radius:var(--bord-card)  
}

.skills { grid-area: 3 / 1 / 4 / 2;
background-color:var( --bg-cards);
border-radius:var(--bord-card) ;
}

.experience { grid-area: 4 / 1 / 5 / 2;
background-color:var( --bg-cards);
border-radius:var(--bord-card);
}

.education { grid-area: 5 / 1 / 6 / 2;
background-color:var( --bg-cards);
border-radius:var(--bord-card);
}

.projects { grid-area: 1 / 2 / 2 / 4; 
background-color:var( --bg-cards); 
border-radius:var(--bord-card) }

.recent-posts { grid-area: 2 / 2 / 2/ 4;
background-color:var( --bg-cards);
border-radius:var(--bord-card) }
`