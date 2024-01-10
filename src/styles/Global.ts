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
  }
  
  body{
  background-color:  var(--body-bg-color);

}

h1,h2,p,ul,li,a{
    color:var(--text-color);
    background-color:var( --bg-cards);
    
}
 li{
   list-style: none;
 }

 .container {  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 5px 5px;
  grid-auto-flow: row;
  grid-template-areas:
    "profile projects"
    "social-media education"
    "skills experience"
    "interesse interesse";
}

.profile { grid-area: profile;

background-color:var( --bg-cards); 
border-radius:var(--bord-card)  }

.social-media { grid-area: social-media;

background-color:var( --bg-cards); 
border-radius:var(--bord-card)  }

.skills { grid-area: skills;

background-color:var( --bg-cards); 
border-radius:var(--bord-card)  }

.projects { grid-area: projects;

background-color:var( --bg-cards); 
border-radius:var(--bord-card) 
 }

.education { grid-area: education;

background-color:var( --bg-cards); 
border-radius:var(--bord-card)  }

.experience { grid-area: experience;

background-color:var( --bg-cards); 
border-radius:var(--bord-card)  }

.interesse { grid-area: interesse;

background-color:var( --bg-cards); 
border-radius:var(--bord-card)  }

 
@media screen and (max-width: 768px) {
  .container {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr auto auto;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "profile"
    "social-media"
    "skills"
    "projects"
    "education"
    "experience"
    "interesse";
}

.profile { grid-area: profile; }

.social-media { grid-area: social-media; }

.projects { grid-area: skills; }

.skills { grid-area: projects; }

.education { grid-area: education; }

.experience { grid-area: experience; }

.interesse { grid-area: interesse; }

}

@media screen and (max-width: 620px) {
  *{
    padding: 4px;
  }
}
`;
