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
      font-size: clamp(1rem, 1.2rem, 2.5rem);
      a {
        text-decoration: none;
      }

      a:hover {
        color: white;
      }
    }
  }
`;
