import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSubjectsList } from '../services/server';

export default function BySubjects() {
    const [list, setList] = useState([]);
    const [disciplines, setDisciplines] = useState([]);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const req = getSubjectsList();
        req.then(res => setList(res.data));
    },[]);

    return (
        <Body>
            <Column>
                <Title>Períodos</Title>
                {list.map(l => (
                    <h2 key={l.id} onClick={() => setDisciplines(l.subjects)}>
                        {l.name}
                    </h2>
                ))}
            </Column>
            <Column>
                {(disciplines.length !== 0) && 
                    <Title>Disciplinas</Title>
                }
                {disciplines.map(d => (
                    <h3 key={d.id} onClick={() => setTests(d.tests)}>
                        {d.name} ({d.tests.length} {d.tests.length === 1 ? 'prova' : 'provas'})
                    </h3>
                ))}
            </Column>
            <Column>
                {(tests.length !== 0) && 
                    <Title>Provas</Title>
                }
                {tests.map(t => (
                    <a href={t.pdfLink} target="_blank" rel="noreferrer" key={t.id}>
                        {t.category.name} - {t.name} - {t.teacher.name}
                    </a>
                ))}
            </Column>
        </Body>
    );
}

const Body = styled.div`
    margin: 50px 100px;
    display: flex;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);

    h2{
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        background-image: linear-gradient(to bottom, #757575, #000);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        cursor: pointer;
        text-align: center;
    }

    h3{
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        background-image: linear-gradient(to bottom, #3d3d3d, #000);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        cursor: pointer;
        text-align: center;
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