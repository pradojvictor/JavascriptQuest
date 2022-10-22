import styled from "styled-components";

import { images } from "../../assets"

export const Section = styled.section`
    background: url(${images.ImagesHome});
    height: 100vh;
    background-position:center;
    background-size: cover;
    display:flex;
    justify-content:center;
    align-items:end;

`;

export const Button = styled.button`
    cursor: pointer;
    width:100%;
    height:200px;
    border-radius: 120px 120px 0px 0px;
    border:none;
    font-size: 50px;
    font-weight:700;
    

    color:white;
    background: rgba(129, 93, 69, 0.5);
    &:hover {
      background-color: rgba(129, 93, 69, 0.3);
    }


    @media (max-width: 700px) {
        font-size:35px;
     }
`;


export const Wrapper = styled.section`
    background: url(${images.ImagesHome});
    margin-top:-21px;
    height:auto;
    width:auto;
`;