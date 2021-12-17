/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategories, getSubjects, getTeacherBySubject } from '../services/server';

export default function SendTest() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState(null);
    const [subject, setSubject] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const categReq = getCategories();
        categReq.then(res => setCategories(res.data));

        const subjReq = getSubjects();
        subjReq.then(res => setSubjects(res.data));
    }, []);

    useEffect(() => {
        if (subject !== null){
            const teacherReq = getTeacherBySubject(subject);
            teacherReq.then(res => setTeachers(res.data));
        }
    }, [subject]);

    return (
        <Body>
            <form>
                <Input 
                    type="text" 
                    placeholder="Nome da prova (Ex.: 2020.1)" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    onInvalid={e => e.target.setCustomValidity('Você deve inserir um nome aqui')} 
                    onInput={e => e.target.setCustomValidity('')}
                    required 
                />
                <Input
                    type="url" 
                    placeholder="Link" 
                    value={link} 
                    onChange={e => setLink(e.target.value)}
                    onInvalid={e => e.target.setCustomValidity('Você deve inserir um link válido aqui')} 
                    onInput={e => e.target.setCustomValidity('')}
                    required
                />
                <Select onChange={(e) => setCategory(e.target.value)}>
                    <option value="0" disabled selected>Categoria</option>
                    {categories.map(c => (
                        <option value={c.id} key={c.id}>{c.name}</option>
                    ))}
                </Select>
                <Select onChange={(e) => setSubject(e.target.value)}>
                    <option value="0" disabled selected>Disciplina</option>
                    {subjects.map(s => (
                        <option value={s.id} key={s.id}>{s.name}</option>
                    ))}
                </Select>
                <Select onChange={(e) => setTeacher(e.target.value)} >
                    <option value="0" disabled selected>Professor</option>
                    {teachers.map(t => (
                        <option value={t.id} key={t.id}>{t.name}</option>
                    ))}
                </Select>
                <Button type="submit">
                    Enviar
                </Button>
            </form>
        </Body>
    );
}

const Body = styled.div`
    margin: 50px 150px;
    padding: 0 20%;
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid #CCC;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 100%;
  height: 43px;
  font-size: 20px;

  ::placeholder{
      font-size: 20px;
      color: #807a7a;
  }
`;

const Button = styled.button`
  background-color: #0c823e;
  border-radius: 5px;
  color: #FFF;
  border: none;
  opacity: ${props => props.disabled ? '0.7' : '1'};
  cursor: ${props => props.disabled ? 'inherit': 'pointer'};
  font-size: 20px;
  font-weight: bold;
  height: 43px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = styled.div`
  margin: 10px 0;
  color: #DC3545;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Select = styled.select`
  height: 43px;
  background: #FFF;
  width: 100%;
  border-radius: 5px;
  border-color: #CCC;
  padding-left: 13px;
  font-size: 20px;
  color: #807a7a;
  margin-bottom: 15px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
