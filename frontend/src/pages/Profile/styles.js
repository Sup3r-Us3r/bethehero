import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    img {
      height: 64px;
    }

    span {
      font-size: 20px;
      margin-left: 24px;
    }

    a {
      width: 260px;
      height: 60px;
      background: #e02041;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-left: auto;
      margin-top: 0;
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

    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.5s;

      &:hover {
        border-color: ${darken(0.05, '#dcdce6')};
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;

        &:not(:first-child) {
          margin-top: 32px;
        }
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
