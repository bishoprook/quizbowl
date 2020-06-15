import React, { useRef } from 'react';

import { showQuestion, addQuestion } from '../actions/actions.js';

import RoomContext from './RoomContext.js';
import ActionButton from './ActionButton.js';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const QuestionTable = ({ getPasscode }) => {
    const newSubjectRef = useRef(null);
    const newPagesRef = useRef(null);

    return <RoomContext.Consumer>
        {({ sendAction, room, roomState: { questions = [], showing } }) => {

        const submitNew = () => {
            const subject = newSubjectRef.current.value;
            const pages = newPagesRef.current.value.split('|');
            if (subject !== '' && pages[0] !== '') {
                sendAction(addQuestion(room, getPasscode(), subject, pages));
            }
            newSubjectRef.current.value = '';
            newPagesRef.current.value = '';
        };
        
        return <Table size="sm" striped bordered hover>
                <tbody>
                    <tr>
                        <th>Index</th>
                        <th>Subject</th>
                        <th>Question text</th>
                        <th></th>
                    </tr>
                    {questions.map((question, idx) => (
                        question.pages.map((page, pageNum) => (
                            <tr key={`question-row-${idx}-${pageNum}`}>
                                <td>{pageNum !== 0 ? '' : (<>
                                    <span>{idx + 1}</span>
                                    <ActionButton
                                        size="sm"
                                        action={room => showQuestion(room, getPasscode(), idx, null)}
                                    >
                                        {'Show'}
                                    </ActionButton>
                                </>)}</td>
                                <td>{pageNum !== 0 ? '' : question.subject}</td>
                                <td>{page}</td>
                                <td>
                                    <ActionButton
                                        size="sm"
                                        action={room => showQuestion(room, getPasscode(), idx, pageNum)}
                                    >
                                        {'Show'}
                                    </ActionButton>
                                </td>
                            </tr>
                        ))
                    ))}
                    <tr>
                        <td></td>
                        <td>
                            <Form onSubmit={submitNew}>
                                <Form.Control ref={newSubjectRef} type="text" />
                            </Form>
                        </td>
                        <td>
                            <Form onSubmit={submitNew}>
                                <Form.Control ref={newPagesRef} type="text" />
                            </Form>
                        </td>
                        <td>
                            <Button
                                size="sm"
                                onClick={submitNew}
                            >
                                {'Add question'}
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>;
        }}
    </RoomContext.Consumer>
};

export default QuestionTable;