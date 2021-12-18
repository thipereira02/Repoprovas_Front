import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTeachersList } from '../services/server';

export default function ByTeachers() {
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState([]);

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
                        <h2 key={l.id} onClick={() => setSelected(l.tests)} >
                            {l.name} ({l.tests.length} {l.tests.length === 1 ? 'prova' : 'provas'})
                        </h2>
                    </>
                ))}
            </Column>
            <Column>
                {(selected.length !== 0) && 
                    <Title>Provas</Title>
                }
                {selected && selected.map(s => (
                    <a href={s.pdfLink} target="_blank" rel="noreferrer" key={s.id}>
                        {s.category.name} - {s.name} - {s.subject.name}
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
        font-size: 22px;
        font-weight: 700;
        line-height: 30px;
        background-image: linear-gradient(to bottom, #0c823e, #000);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        cursor: pointer;
    }

    a{
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        color: #556354;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
`;