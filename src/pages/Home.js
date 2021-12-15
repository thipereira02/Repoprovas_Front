import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export default function Home() {
    const navigate = useNavigate();

    function goTo(path) {
        navigate(path);
    }

    return (
        <Options>
            <Button onClick={() => goTo('/bysubjects')}>
                Ver provas por disciplinas
            </Button>
            <Button onClick={() => goTo('/byteachers')}>
                Ver provas por professores
            </Button>
            <Button onClick={() => goTo('/sendtests')}>
                Enviar uma prova
            </Button>
        </Options>
    );
}

const Options = styled.div`
    margin: 50px 150px;
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    height: 90px;
    width: 300px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    border-color: #0c823e;
    background: linear-gradient(to bottom, #0c823e 5%,#99b83c 100%);
    cursor: pointer;
    
    :hover{
        background: linear-gradient(to bottom, #99b83c 5%, #0c823e 100%);
    }
    :active{
        position: relative;
        top: 2px;
    }
`;