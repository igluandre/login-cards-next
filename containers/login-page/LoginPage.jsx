'use client'

import { useContext, useMemo, useState } from "react";
import { useFetch  } from "../../hooks/useFetch";
import { FormWrapper, H2, Input, InputWrapper, ParagraphError, ParagraphUserData, Section, SubmitButton, UserDataWrapper, Form } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AuthContext } from "@/auth/context";


export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const schema = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string()
      .min(5, 'Debe de tener al menos 6 caracteres')
      .max(18, 'Debe tener máximo de 18 caracteres')
      .matches(/(?=.*\W)/, 'Debe de contener un cáracter especial')
      .matches(/[?=.*0-9]/, 'Debe de contener al menos un numero')
      .matches(/[?=.*A-Z]/, 'Debe de contener al menos una mayúscula')
      .required("Required"),
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const [isFormValid, setIsFormValid] = useState({
    isValid: true,
    errorLogin: "",
  });

  const url = "https://randomuser.me/api/?password=number,special,upper,lower,6-18";
  const { data: dataApi, isLoading } = useFetch(url);
  const { results = [] } = !!dataApi && dataApi;


  const onSubmit = (data) => {
    const { username, password } = data;
    if (username.length <= 1 || password.length <= 1) return;

    if (username.trim() !== results[0]?.login.username && password.trim() === results[0]?.login.password) {
      setIsFormValid({
        isValid: false,
        errorLogin: 'El username es incorrecto'
      });
    }else if(username.trim() === results[0]?.login.username && password.trim() !== results[0]?.login.password){
      setIsFormValid({
        isValid: false,
        errorLogin: 'La contraseña es incorrecta'
      });
    }else if (username.trim() !== results[0]?.login.username && password.trim() !== results[0]?.login.password) {
      setIsFormValid({
        isValid: false,
        errorLogin: 'Username o contraseña inválidos'
      });
    }else{
      login(username);
      setIsFormValid({
        isValid: true,
        errorLogin: ''
      });
    }

  };



  return (
    <>
      <Section>
        <FormWrapper>
          <H2>Login</H2>

          {!isLoading && (
            <UserDataWrapper>
              <ParagraphUserData>
                <strong>Username:</strong> {results[0]?.login.username}
              </ParagraphUserData>
              <ParagraphUserData>
                <strong>Password:</strong> {results[0]?.login.password}
              </ParagraphUserData>
            </UserDataWrapper>
          )}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <Input type="text" {...register('username')} placeholder="Username"/>
              <ParagraphError>{errors.username?.message}</ParagraphError>
            </InputWrapper>

            <InputWrapper>
              <Input {...register('password')} placeholder="Password"/>
              <ParagraphError>{errors.password?.message}</ParagraphError>
            </InputWrapper>

            {
              (!isFormValid.isValid) && <ParagraphError>{isFormValid.errorLogin}</ParagraphError>
            }

            <SubmitButton type="submit">Login</SubmitButton>
          </Form>
        </FormWrapper>
      </Section>
    </>
  );
};