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

  > div {
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      width: 100%;
      max-width: 380px;

      h1 {
        margin: 64px 0 32px;
        font-size: 32px;
      }

      p {
        font-size: 18px;
        color: #737380;
        line-height: 32px;
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

    form {
      width: 100%;
      max-width: 450px;

      input {
        margin-top: 8px;
      }

      div {
        display: flex;

        input:not(:first-child) {
          margin-left: 8px;
        }
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
    }
  }
`;
