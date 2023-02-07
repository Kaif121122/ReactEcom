import styled from "styled-components";

export const Button = styled.button`

font-size: 2rem;
font-weight:700;
font-family: 'Montserrat', sans-serif;
text-transform:uppercase;
cursor: pointer;
padding: 1.5rem 1rem;
border-radius:0.1rem;
background-color:${({ theme }) => theme.colors.teal_color};
color:${({ theme }) => theme.colors.grey_color};

&:hover{
    opacity: 0.5;
    transition:all 0.2s ease-in-out;
    transform: scale(0.96);
}
width: 18rem;
margin-top:2rem;
margin-right:auto;
border: none;
`