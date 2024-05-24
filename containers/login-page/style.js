import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background-color: var(--secondary-color);
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

export const FormWrapper = styled.div`
  width: 400px;
  padding: 1.9rem 1.3rem;
  height: auto;
  background-color: var(--light-secondary-color);
  border-radius: 20px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 

  @media (max-width: 575.98px) {
    width: 80%;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  font-size: 30px;
`;

export const UserDataWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const ParagraphUserData = styled.p`
  font-size: 15px;
` ;

export const Form = styled.form`
  width: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.125rem 0.4rem;
  font-size: 14px;
  height: 35px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  font-size: 16px;
  margin: 0px auto;
  margin-top: 12px;
  outline: none;
  background-color: var(--primary-color);
  border: none;
  color: #fff;
  padding: 0.4rem 0.4rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover{
    background-color: #61a3be;
  }
`;

export const ParagraphError = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;