/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import image from '../assets/logo.png';

export default function Main({ children }) {
    const navigate = useNavigate();

    function goTo(path) {
        navigate(path);
    }

    return (
        <Body>
            <Image src={image} alt='logo' onClick={() => goTo('/')} />
            {children}
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
    cursor: pointer;
`;