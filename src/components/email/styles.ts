import styled from "styled-components";

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60%;

    color: #ffff;
    font-size: 1.3rem;

    input,
    textarea {
      width: 100%;

      padding: 1rem;
      font-size: 1.1rem;
      margin-top: 0.5rem;

      border-radius: 0.5rem;
      border-color: transparent;
    }

    textarea {
      margin-bottom: 1rem;
    }
  }

  button {
    width: 60%;
    height: 3rem;

    border-radius: 0.5rem;
    border-color: transparent;
    margin-bottom: 2rem;

    font-size: 1rem;
    font-weight: bold;

    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
    }

    div {
      width: 80%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`;
