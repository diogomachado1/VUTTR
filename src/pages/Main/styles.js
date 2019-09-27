import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  a {
    text-decoration: none;
  }
  > div:nth-child(3) {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    > span {
      > span > input {
        @media only screen and (max-width: 550px) {
          width: 150px;
        }
      }
      margin-bottom: 10px;
      display: flex;
    }
  }
`;
export const ToolsList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  > li {
    box-shadow: 0px 5px 7px #0000000d;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    padding: 10px;

    > div {
      display: flex;
      align-items: center;
      > a {
        margin-right: auto;
        font-size: 20px;
      }
      > button {
        margin-left: 10px;
      }
    }
    > span {
      margin-top: 10px;
      display: flex;
    }
    > ul {
      list-style: none;
      width: 100%;
      display: flex;
      margin-top: 10px;
      flex-wrap: wrap;
      > li {
        margin-right: 5px;
      }
    }
  }
  > li + li {
    margin-top: 15px;
  }
`;
