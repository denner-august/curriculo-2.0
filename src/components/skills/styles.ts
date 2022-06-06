import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  p {
    height: auto;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      min-width: 100px;
      width: auto;
      height: auto;

      font-size: 1.1rem;
      margin: 0.2rem;
      border-radius: 0.5rem;

      text-align: center;

      color: #f0e7e7;
      background-color: var(--text-color);
    }

    li:hover {
      background-color: var(--bg-techs);
      color: black;
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      text-align: center;
    }

    ul {
      flex: 1;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      li {
        min-width: 0px;
        width: 70%;
        min-height: 0;
        height: auto;
      }
    }
  }
`;
