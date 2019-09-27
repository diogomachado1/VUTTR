import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
  > form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;
