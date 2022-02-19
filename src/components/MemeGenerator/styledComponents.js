import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 40px;
`
export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
  color: #35469c;
`
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: #5a7184;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 1px solid #7e858e;
  border-radius: 5px;
  padding: 13px;
  color: #7e858e;
  font-size: 13px;
  padding-left: 20px;
  margin-bottom: 15px;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #7e858e;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  padding: 12px;
  border-radius: 8px;
  color: #d7dfe9;
  font-family: 'Roboto';
  font-size: 15px;
  border: none;
  outline: none;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`
export const Option = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`
export const MemeDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`
export const MemeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding: 20px;
`
export const Text = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
