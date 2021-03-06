import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Source Sans Pro', sans-serif;
    color: #170C3A;
  }

  #root {
    height: 100vh;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary-normal-color: #365DF0;
    --primary-dark-color: #2F55CC;
    --primary-darker-color: #244AA8;
    --primary-light-color: #9AAEF7;
    --primary-lighter-color: #B9C6FA;
    --primary-lightest-color: #CAD6FC;
    --primary-mostLightest-color: #E1E7FD;

    --success-normal-color: #12DB89;
    --success-dark-color: #10B26C;
    --success-darker-color: #0E995D;
    --success-light-color: #88EDC4;
    --success-lighter-color: #B7F7D8;
    --success-lightest-color: #B7F7D8;
    --success-mostLightest-color: #E7FBF3;

    --danger-normal-color: #F95E5A;
    --danger-dark-color: #CC4C4C;
    --danger-darker-color: #A53F3F;
    --danger-light-color: #FCAEAC;
    --danger-lighter-color: #FCC6C5;
    --danger-lightest-color: #FCD7D6;
    --danger-mostLightest-color: #FEEFEE;

    --warning-normal-color: #FFBB43;
    --warning-dark-color: #D89C3A;
    --warning-darker-color: #996C2B;
    --warning-light-color: #FFDDA1;
    --warning-lighter-color: ${darken(0.03, '#FFDDA1')};
    --warning-lightest-color: #FFDDA1;
    --warning-mostLightest-color: #FFF8EC;
  }
`;
