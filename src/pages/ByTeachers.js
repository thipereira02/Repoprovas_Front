import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTeachersList } from '../services/server';

export default function ByTeachers() {
    const [list, setList] = useState([]);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const req = getTeachersList();
        req.then(res => setList(res.data));
    },[]);

    return (
        <Body>
            <Column>
                <Title>Professores</Title>
                {list.map(l => (
                    <>
                        <h2 key={l.id} onClick={() => setTests(l.tests)} >
                            {l.name} ({l.tests.length} {l.tests.length === 1 ? 'prova' : 'provas'})
                        </h2>
                    </>
                ))}
            </Column>
            <Column>
                {(tests.length !== 0) && 
                    <Title>Provas</Title>
                }
                {tests && tests.map(t => (
                    <a href={t.pdfLink} target="_blank" rel="noreferrer" key={t.id}>
                        {t.category.name} - {t.name} - {t.subject.name}
                    </a>
                ))}
            </Column>
        </Body>
    );
}

const Body = styled.div`
    margin: 50px 150px;
    display: flex;
`;

const Column = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        background-image: linear-gradient(to bottom, #3d3d3d, #000);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        cursor: pointer;
    }

    a{
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        background-image: linear-gradient(to bottom, #0c823e, #000);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #2E2D2D;
`;