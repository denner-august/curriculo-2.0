import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    height: 2.5rem;
    width: 100%;
    border-bottom: 0.3px solid #e6e6e6;
  }

  h2:hover {
    color: white;
    cursor: default;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      font-size: clamp(1rem, 1.3rem, 2.5rem);
      a {
        text-decoration: none;
        cursor: pointer;
      }

      a:hover {
        color: white;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-direction: row;
      justify-content: left;

      li {
        min-width: 150px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    ul {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
