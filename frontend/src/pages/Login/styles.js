import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 80px;

    form {
      margin-top: 100px;

      h1 {
        font-size: 25px;
        margin-bottom: 32px;
        text-transform: uppercase;
        color: #41414d;
      }

      button {
        width: 100%;
        height: 60px;
        background: #e02041;
        border: 0;
        border-radius: 8px;
        color: #fff;
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: background 0.5s;

        &:hover {
          background: ${darken(0.05, '#e02041')};
        }
      }

      a {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 15px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;

        svg {
          margin-right: 8px;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  img:nth-child(2) {
    height: 470px;
  }
`;
