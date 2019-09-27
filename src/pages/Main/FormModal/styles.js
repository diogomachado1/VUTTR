import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: #170c3ae6;
  width: 100vw;
  height: 100vh;
  display: flex;
  animation: showFormAnimation 0.3s;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  @keyframes showFormAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  > div {
    box-shadow: 0px 20px 25px #0000001a;
    border-radius: 5px;
    background: #fff;
    max-width: 800px;
    width: 100%;
    margin: 40px;
    padding: 30px;
    > form {
      display: flex;
      flex-direction: column;
      > * + * {
        margin-top: 15px;
      }
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > button {
          width: calc(50% - 5px);
        }
      }
    }
  }
`;
