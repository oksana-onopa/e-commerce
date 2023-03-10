import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  // padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.5s;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.5s;
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  transition: 0.5s;

  &:hover {
    background-color: #357ae8;
    border: none;
    transition: 0.5s;
  }
`;

export const InvertedButton = styled(BaseButton)`
  font-family: "Open Sans";
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.5s;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    transition: 0.5s;
  }
`;