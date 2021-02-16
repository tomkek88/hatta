import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
`

const Button = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>

export default Button
