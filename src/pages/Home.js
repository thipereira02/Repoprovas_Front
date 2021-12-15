import React from 'react';
import styled from 'styled-components';

import image from '../assets/REPOPROVAS.png';

export default function Home() {
    return (
        <Body>
            <Image src={image} alt='logo'/>
            <Options>
                <Button>
                    Visualizar uma prova
                </Button>
                <Button>
                    Enviar uma prova
                </Button>
            </Options>
        </Body>
    );
}

const Body = styled.div`
    padding-top: 70px;
    margin: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    height: 300px;
    width: 300px;
`;

const Options = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    width: 70%;
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