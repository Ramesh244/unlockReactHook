// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161617;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
export const LockContainer = styled.div`
  display: flex;
  flex-direction: Column;
`

export const Text = styled.p`
  display: flex;
  flex-direction: Column;
  color: #ffffff;
  font-family: Roboto;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  align-self: center;
  color: #ffffff;
  background-color: #1976d2;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 10px 16px;
  margin-top: 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  outline: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`
