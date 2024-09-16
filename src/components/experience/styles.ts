import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;

    li {
      color: #a7c3ff;
      list-style: disc;
      font-size: 1.2rem;
      margin: 0.5rem 0rem;
    }
    li:hover {
      font-size: 1.3rem;
      transition: 0.2s;
      cursor: pointer;
    }
  }

  p {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    height: 400px;

    p {
      text-align: center;
    }

    ul {
      flex: 1;
      justify-content: space-evenly;
      margin-left: 0px;

      li {
        list-style: none;
      }
    }
  }
`;
