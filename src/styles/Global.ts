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
    height: 100% ;
    margin: 0;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color:  var(--body-bg-color);
}

h1,h2,p{
    color:var(--text-color);
}

.container{
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  height: 150vh ;
}

.social { 
grid-area: 2 / 1 / 3 / 2; 
background-color:var( --bg-cards);
border-radius:var(--bord-card)   }

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
border-radius:var(--bord-card) }

.experience { grid-area: 4 / 1 / 5 / 2;
background-color:var( --bg-cards);
border-radius:var(--bord-card) }

.education { grid-area: 5 / 1 / 6 / 2;
background-color:var( --bg-cards);
border-radius:var(--bord-card) }

.projects { grid-area: 1 / 2 / 2 / 4; 
background-color:var( --bg-cards); 
border-radius:var(--bord-card) }

.project-01 { grid-area: 2 / 2 / 3 / 3; 
background-color:var( --bg-cards);
border-radius:var(--bord-card) }

.project-02 { grid-area: 2 / 3 / 3 / 4;
background-color:var( --bg-cards);
border-radius:var(--bord-card) }

.recent-posts { grid-area: 3 / 2 / 4 / 4;
background-color:var( --bg-cards);
border-radius:var(--bord-card) }


`