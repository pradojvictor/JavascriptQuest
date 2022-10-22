import styled from "styled-components";


export const Card = styled.div`
    background: rgba(129, 93, 69, 0.3);
    width:auto;
    margin:0;
    padding:0;
    h2 {
        padding-top:25px;
        color: white;
        font-size:25px;
        text-align:center;
    } span {
        color: white;
        font-size:19px;
        margin-left: 10%;
    } p {
        color: white;
        font-size: 15px;
        width:80%;
        text-align:justify;
        display:block;
        margin:auto;    
    }
    height:100vh;
`;

export const Texto = styled.textarea`
    background: rgba(255, 255, 255, 0.6);
    width: 80%;
    height: 70px;
    font-size: 35px;
    color: #2D112A;
    border-radius: 5px;
    padding: 10px;
    border:none;
    resize: none;
    outline: none;
    resize: none;
    display:block;
    margin:auto;
    margin-top:5%;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.6);
    width: 140px;
    height: 30px;
    border:none;
    border-radius:3px;
    padding:5px;
    font-size:15px;
    color: #2D112A;
    display:block;
    margin:auto;
    margin-top:5%;
    margin-bottom: 5%;
    
`;

export const Butt = styled.button`
    width: 340px;
    height: 40px;
    padding:5px;
    font-size: 15px;
    cursor: pointer;
    background: rgba(129, 93, 69, 1);
    border: none;
    color: #ffffff;
    border-radius: 3px;
    &:hover {
        background: rgba(129, 93, 69, 0.8);
    }
    display:block;
    margin:auto;
`;

export const Butt2 = styled.button`
    width: 120px;
    height: 50px;
    font-size: 15px;
    cursor: pointer;
    background: rgba(129, 93, 69, 1);
    border: none;
    border-radius: 3px;
    &:hover {
        background: rgba(129, 93, 69, 0.8)
    }
    margin:2%;
    margin-bottom: 35px;
    margin-top:5%;
`;