import styled from "styled-components";
import ground from "../assets/ground.svg";

export const PageContainner = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  overflow-x: hidden;
  .ground {
    position: absolute;
    background: url(${ground});
    height: 80px;
    width: 100%;
    bottom: 0;
    z-index: 1;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  background: black;
  position: fixed;
  top: 0;
  z-index: 4;
  border-bottom: solid 1px #201f1f;
`;

export const Containner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .back {
    color: white;
    margin-left: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const UserInfo = styled.div`
  color: white;
  display: flex;
  position: relative;
  flex-direction: row;
  margin-right: 100px;
  background: rgba(255, 255, 255, 0.05);
  width: 250px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-left-radius: ${(props) => (props.collapsed ? "15px" : "0")};
  border-bottom-right-radius: ${(props) => (props.collapsed ? "15px" : "0")};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 60px;
  align-items: center;
  cursor: pointer;
  svg {
    transform: ${(props) => (props.collapsed ? "none" : "rotate(180deg)")};
    transition: transform 1s;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: gray;
  }
  span {
    margin-left: 14px;
    margin-right: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 800px) {
    span {
      display: none;
    }
    svg {
      display: none;
    }
    width: 60px;
    padding: 0;
    margin-right: 0;
  }
`;

export const UserMenu = styled.div`
  width: 250px;
  height: ${(props) => (props.collapsed ? "0" : "155px")};
  margin-right: 100px;
  background: #0d0d0d;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: absolute;
  top: 55px;
  left: 1px;
  transition: height 1s;
  display: flex;
  @media screen and (max-width: 800px) {
    left: -200px;
  }
`;

export const UserMenuItems = styled.ul`
  opacity: ${(props) => (props.collapsed ? "0" : "1")};
  transition: opacity 1s;
  transition-delay: 0.5s;
  list-style: none;
  padding-left: 24px;
  padding-top: 24px;
  li {
    opacity: ${(props) => (props.collapsed ? "0" : "1")};
    transition: opacity 1s;
    font-weight: 600;
    margin-bottom: 16px;
  }
  a,
  button {
    display: ${(props) => (props.collapsed ? "none" : "block")};
    background: transparent;
    border: none;
    color: white;
    &:hover {
      color: blue;
    }
  }
  button {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const Sidebar = styled.aside`
  width: ${(props) => (props.collapse ? "0" : "87px")};
  height: 100vh;
  background: black;
  position: fixed;
  display: flex;
  transition: width 1s;
  flex-direction: column;
  z-index: 2;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: ${(props) => (props.collapse ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
  transition: ${(props) => (props.collapse ? "opacity 0s;" : "opacity 1s")};
  transition-delay: ${(props) => (props.collapse ? "0;" : "1s")};
  opacity: ${(props) => (props.collapse ? "0" : "1")};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  color: ${(props) => (props.active ? "#0000ff" : "#fff")};
  cursor: pointer;
  svg {
    color: ${(props) => (props.active ? "#0000ff" : "#fff")};
  }
  &::after {
    display: ${(props) => (props.active ? "flex" : "none")};
    position: absolute;
    content: " ";
    width: 50px;
    margin-left: 4px;
    border-top: solid blue 5px;
    transform: rotate(90deg);
    height: 80px;
  }
  span {
    margin-top: 8px;
  }
  &:hover {
    color: #0000ff;
    svg {
      color: #0000ff;
    }
  }
`;

export const Collapse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  height: 20px;
  align-items: center;
  transition: ${(props) => (props.collapse ? "opacity 0s;" : "opacity 1s")};
  transition-delay: ${(props) => (props.collapse ? "0;" : "1s")};
  opacity: ${(props) => (props.collapse ? "0" : "1")};
  cursor: pointer;
  .hide {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      color: gray;
    }
  }
  color: gray;
  font-size: small;
  &:hover {
    color: white;
    svg {
      color: white;
    }
  }
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-top: 80px;
  z-index: 2;
  width: 100%;
  position: relative;
  background: transparent;
  justify-content: center;
  @media screen and (max-width: 800px) {
    margin-top: 80px;
    padding: 0;
  }
`;

export const ContactListContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  background: transparent;
  transition: margin-left 1s;
  flex-direction: column;
  padding-top: 20px;
  /* a {
    width: 400px;
    display: flex;
    height: 400px;
    background: black;
    margin-right: 32px;
    border: solid 1px rgb(28, 28, 158);
    transition: transform 1s;
    transition: border 0.5;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
  }*/
  @media screen and (max-width: 800px) {
    margin-left: 0;
    flex-direction: column;
    width: 100%;
  }
`;

export const ContactListHeader = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    padding-left: 0;
    text-align: center;
  }

  button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #0c85ce;
    color: white;
  }
  button:hover{
    transition: 100ms all;
    transform: scale(1.5);
    cursor: pointer;
  }
`;
export const ContactListMainContent = styled.ul`
  margin-top: 78px;
  list-style: none;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 800px) {
    margin-top: 16px;
    flex-direction: column;
    justify-content: flex-start;

  }
  li:last-child {
    margin-right: 0;
  }
`;

export const SearchBox = styled.input``;
export const SearchBoxContainer = styled.div`
  position: relative;
  display: block;
  width: 250px;
  height: 44px;
  line-height: 44px;
  z-index: 1;
  .input {
    width: 250px;
    height: 32px;
  }
  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }

  .placeholder {
    color: #65657b;
    left: 8px;
    line-height: 8px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }

  .input:focus ~ .placeholder {
    color: #dc2f55;
  }

  label {
    transition: transform 200ms, color 200ms;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 80px;

  .contact{
    
  }

  .picture {
    padding-left: 32px;
  }

  .picture img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .info {
    margin-left: 32px;
    padding-right: 32px;
    white-space: nowrap; 
  }

  .actions{
    display: flex;
    width: 100%;
    padding-left: 24px;
    flex-direction: row;
    margin-bottom: 32px;
  }

  .icons{
    position: absolute;
    right: 20%;

    @media screen and (max-width: 800px) {
      right: 12%;
    }

    svg {
      cursor: pointer;
    }

    svg:hover{
      color: red;
      transition: 0.5s ease-in all;
    }
  }

  input {
    background: #151515;
    color: white;
    height: 32px;
    border: none;
    border-radius: 4px;
    padding-left: 4px;
  }
`

export const Contact = styled.form`
    width: 100%;
    background: ${(props) => (props.edit ? "#151514" : "#0d0d0c")}; 
    border-radius: 16px;
    margin-bottom: 16px;
    height: 100px;
    align-items: center;
    display: flex;
    flex-direction: row;

    .photoContainner {
    input {
      display: none !important;
    }
  }
  #circle {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px blue;
    position: relative;
    background: none;
    outline: none;
    &:hover {
      border: solid 2px darkblue;
      #icon {
        background: darkblue;
      }
    }
  }
  #photo {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80;
      height: 80px;
      border-radius: 50%;
    }
  }
  #icon {
    position: absolute;
    bottom: 0;
    right: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    background: blue;
  }

`