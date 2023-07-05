import styled from "styled-components";

export const Container = styled.div`
    color: white;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Montserrat', sans-serif; 
    background-image: linear-gradient(to right, #8360c3, #2ebf91);
`

export const FormContainer = styled.form`
    padding: 20px;
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
    margin: 20px auto
`

export const FormInput = styled.input`
    border: none;
    padding: 5px;
    font-size: 14px;
    margin-right: 10px
`

export const Button = styled.button`
    border: none;
    color: white;
    font-size: 14px;
    padding: 5px;
    border-radius: 2px;
    background-color: #0d6efd;
`

export const TodosListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: rgb(238,238,238);
    padding: 30px;
    width: 400px;
    border-radius: 4px;
`

export const TodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 50px;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px;
    background-color: white;
    box-shadow: 5px 10px 10px rgb(210,210,210);
`


export const Todo = styled.div`
    display: flex;
    color: black
`

export const TodoIcons = styled.div`
    display: flex;
    gap: 10px;
    color: grey;

`