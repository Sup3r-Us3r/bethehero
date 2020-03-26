import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    font: 100 14px Roboto, sans-serif;
    background: #f0f0f0;
    -wekit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 100 15px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdcd6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form input::placeholder {
    font-weight: 500;
  }

  form textarea {
    width: 100%;
    min-height: 140px;
    height: 60px;
    color: #333;
    border: 1px solid #dcdcd6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: none;
  }

  form textarea::placeholder {
    font-weight: 500;
  }
`;
