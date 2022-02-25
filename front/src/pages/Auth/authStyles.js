import styled from 'styled-components';
import ground from '../../assets/storkN_WhiteGround.svg';
import clouds from '../../assets/storkN_Clouds.svg';

export const Containner = styled.section`
  width: 100%;
  height: 100vh;
  background: #070d13;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  button {
    background: #1c1c9e;
    border-radius: 5px;
    height: 50px;
    border: none;
    margin-top: 8px;
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
  
  .clouds {
    position: absolute;
    z-index: 0;
    top: 10px;
    background-size: cover;
    background: url(${clouds});
    width: 100%;
    background-repeat: repeat-x;
    height: 200px;
  }
  .ground {
    z-index: 0;
    position: absolute;
    bottom: 0;
    background: url(${ground});
    background-size: contain;
    width: 100%;
    height: 150px;
    background-repeat: repeat-x;
    background-position-y: 100%;
  }
`;

export const AuthBox = styled.form`
  width: 370px;
  height: auto;
  padding: 20px;
  display: ${props => props.show ? "flex": "none"};
  flex-direction: column;
  z-index: 1;
  
  .error {
    text-align: center;
    color: red;
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 20px;
    height: 50px;
    border-radius: 8px;
    background: transparent;
    border: solid 1px #50545a;
    color: white;
    transition: all 1s ease;
    padding-left: 16px;
    &:focus {
      border: solid 1px #1c1c9e;
        transition: all 1s ease;
      box-shadow: 0px 0px 2px 2px rgba(28, 28, 158, 0.22);
    }
  }
`;

export const LoadContaiiner = styled.div`
    display: ${props => props.show ? "block": "none"};
`;

export const SubOption = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 28px;
  align-items: center;
  .line {
    border-bottom: solid 1px #2b3033;
    width: 50px;
    height: 1px;
  }
  a {
    flex: 1;
    text-align: center;
    font-size: 16px;
    text-decoration: none;
    color: #1c1c9e;
  }
`;