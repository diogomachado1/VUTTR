import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 30px;
  border: 1px solid #dedce1;
  display: flex;
  justify-content: center;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 900px;
    > nav > a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const Profile = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > span {
    font-weight: bold;
  }
  > a {
    margin-top: 3px;
    font-size: 10px;
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
